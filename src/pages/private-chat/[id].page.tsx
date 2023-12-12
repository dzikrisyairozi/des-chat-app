/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import CryptoJS from 'crypto-js';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import forge from 'node-forge';
import React, { useEffect, useState } from 'react';

import { auth, db } from '@/lib/firebase/config'; // Adjust the import path

interface Message {
  id: string;
  text: string;
  createdAt: Date;
  senderId: string;
}

const PrivateChatPage = () => {
  const router = useRouter();
  // const { id: otherUserId } = router.query;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [desKey, setDesKey] = useState(''); // Store the decrypted DES key here
  const [isReady, setIsReady] = useState(false);

  const otherUserId = router.query.id;

  const initiateChatSession = async (recipientId: string) => {
    if (!auth.currentUser) {
      console.error('No user is currently logged in.');
      return;
    }
    // Generate a new DES key
    const desKey = CryptoJS.lib.WordArray.random(128 / 8).toString(
      CryptoJS.enc.Hex
    );

    // Fetch recipient's public RSA key
    const recipientPublicKey = await fetchPublicKey(recipientId);

    // Encrypt the DES key with the recipient's public key
    const encryptedDESKey = encryptWithPublicKey(recipientPublicKey, desKey);

    // Store the encrypted DES key in Firestore
    await sendEncryptedDESKey(
      getChatSessionId(auth.currentUser.uid, recipientId),
      encryptedDESKey
    );

    console.log('deskey', desKey);
    console.log('encryptedDESKey', encryptedDESKey);

    return desKey; // Return the DES key for use in the current session
  };

  // Function to fetch a user's public RSA key
  const fetchPublicKey = async (userId: string) => {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data().publicKey;
    } else {
      throw new Error('User not found');
    }
  };

  // Function to encrypt the DES key with RSA public key
  const encryptWithPublicKey = (publicKeyPem: string, desKey: string) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encrypted = publicKey.encrypt(desKey, 'RSA-OAEP');
    return forge.util.encode64(encrypted);
  };

  const getPrivateKeyForCurrentUser = () => {
    // Retrieve the private key from a secure storage
    // WARNING: Storing private keys in local storage
    const privateKeyPem = localStorage.getItem('privateKey');
    return privateKeyPem;
  };

  const decryptWithPrivateKey = (
    encryptedKey: string,
    privateKeyPem: string
  ) => {
    try {
      const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
      const decrypted = privateKey.decrypt(
        forge.util.decode64(encryptedKey),
        'RSA-OAEP'
      );
      return decrypted;
    } catch (error) {
      console.error(
        'Error in RSA decryption. Encrypted key:',
        // encryptedKey,
        'Error:',
        error
      );
      // More detailed error handling or logging
      throw error;
    }
  };

  // Function to store the encrypted DES key in Firestore
  const sendEncryptedDESKey = async (
    chatSessionId: string,
    encryptedKey: string
  ) => {
    const sessionKeyRef = doc(db, 'chatSessionKeys', chatSessionId);
    await setDoc(sessionKeyRef, { encryptedKey });
  };

  // Function to check for an existing DES key
  const checkForExistingDESKey = async (chatSessionId: string) => {
    const sessionKeyRef = doc(db, 'chatSessionKeys', chatSessionId);
    const docSnap = await getDoc(sessionKeyRef);

    if (docSnap.exists()) {
      return docSnap.data().encryptedKey;
    } else {
      return null;
    }
  };

  // Encrypt with DES
  const encryptWithDES = (
    message: string | CryptoJS.lib.WordArray,
    key: string | CryptoJS.lib.WordArray
  ) => {
    return CryptoJS.DES.encrypt(message, key).toString();
  };

  // Decrypt with DES
  const decryptWithDES = (
    cipherText: string | CryptoJS.lib.CipherParams,
    key: string | CryptoJS.lib.WordArray
  ) => {
    const bytes = CryptoJS.DES.decrypt(cipherText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  useEffect(() => {
    const initiateAndSetDESKey = async () => {
      try {
        if (!auth.currentUser || !otherUserId) {
          console.error(
            'User not authenticated or otherUserId is not available.'
          );
          return;
        }

        const recipientId = otherUserId.toString();
        const chatSessionId = getChatSessionId(
          auth.currentUser.uid,
          recipientId
        );
        let key;

        const existingEncryptedKey = await checkForExistingDESKey(
          chatSessionId
        );
        if (existingEncryptedKey) {
          const userPrivateKeyPem = getPrivateKeyForCurrentUser();
          if (!userPrivateKeyPem) {
            throw new Error('Private key not found.');
          }
          key = decryptWithPrivateKey(existingEncryptedKey, userPrivateKeyPem);
        } else {
          key = await initiateChatSession(recipientId);
        }

        if (key) {
          setDesKey(key);
        } else {
          throw new Error('Failed to obtain or generate a valid DES key.');
        }
      } catch (error) {
        console.error('Error in DES key handling:', error);
      } finally {
        setIsReady(true);
      }
    };

    if (auth.currentUser && otherUserId) {
      initiateAndSetDESKey();
    }

    return () => {
      // Clean up logic if necessary
    };
  }, [otherUserId, auth.currentUser]);

  useEffect(() => {
    if (isReady && auth.currentUser && otherUserId) {
      const chatSessionId = getChatSessionId(
        auth.currentUser.uid,
        otherUserId.toString()
      );
      const messagesRef = collection(
        db,
        'privateMessages',
        chatSessionId,
        'messages'
      );
      const queryMessages = query(messagesRef, orderBy('createdAt', 'asc'));

      const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
        const fetchedMessages = snapshot.docs
          .map((doc) => {
            const data = doc.data();
            try {
              const decryptedText = decryptWithDES(data.text, desKey);
              // Check if 'createdAt' exists and is not null
              const createdAt = data.createdAt
                ? data.createdAt.toDate()
                : new Date();
              return { id: doc.id, text: decryptedText, createdAt, ...data };
            } catch (error) {
              console.error('Error decrypting message:', data.text, error);
              return null;
            }
          })
          .filter((msg) => msg !== null);

        setMessages(fetchedMessages as Message[]);
      });

      return () => unsubscribe();
    }
  }, [isReady, desKey, otherUserId, auth.currentUser]);

  const sendMessage = async () => {
    if (!isReady) {
      console.error('Component is not ready or DES key is missing.');
      return;
    }

    if (!message.trim() || !auth.currentUser || !otherUserId) {
      console.error('Message is empty or missing user details.');
      return;
    }

    // console.log('sendMessage called');
    // console.log('Message:', message.trim());
    // console.log('Current User:', auth.currentUser);
    // console.log('Other User ID:', otherUserId);
    // console.log('DES Key:', desKey);

    setLoading(true);
    try {
      const chatSessionId = getChatSessionId(
        auth.currentUser.uid,
        otherUserId.toString()
      );
      const messagesRef = collection(
        db,
        'privateMessages',
        chatSessionId,
        'messages'
      );

      const encryptedMessage = encryptWithDES(message, desKey);
      await addDoc(messagesRef, {
        text: encryptedMessage,
        createdAt: serverTimestamp(),
        senderId: auth.currentUser.uid,
      });

      console.log('Message sent successfully!', encryptedMessage);

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const testRSA = () => {
    try {
      // Generate a new RSA key pair
      const keypair = forge.pki.rsa.generateKeyPair(2048);
      console.log('keypair:', keypair);
      const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
      console.log('publicKeyPem:', publicKeyPem);
      const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
      console.log('privateKeyPem:', privateKeyPem);

      // Encrypt a test message
      const testMessage = 'Hello, World!';
      const encrypted = encryptWithPublicKey(publicKeyPem, testMessage);
      console.log('Encrpted message:', encrypted);

      // Decrypt the message
      const decrypted = decryptWithPrivateKey(encrypted, privateKeyPem);

      console.log('Decrypted message:', decrypted);
    } catch (error) {
      console.error('RSA Test Error:', error);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div>
        <h1 className='mb-4 text-2xl font-bold'>
          Private Chat with {otherUserId}
        </h1>
      </div>

      <div className='mb-4'>
        {messages.map((msg) => (
          <p
            key={msg.id}
            className={`${
              msg.senderId === auth.currentUser?.uid
                ? 'text-right'
                : 'text-left'
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <div>
        <textarea
          className='w-full border p-2 text-black'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type a message...'
        ></textarea>
        <button
          className='mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
        {/* <button
          className='mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          onClick={testRSA}
          disabled={loading}
        >
          Test RSA
        </button> */}
      </div>
    </div>
  );
};

// Helper function to generate a unique chat session ID
function getChatSessionId(userId1: string, userId2: string) {
  return [userId1, userId2].sort().join('_');
}

export default PrivateChatPage;
