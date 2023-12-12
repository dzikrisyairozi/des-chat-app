/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
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
  const [encryptedInput, setEncryptedInput] = useState('');
  const [decryptedOutput, setDecryptedOutput] = useState('');
  const [plainTextInput, setPlainTextInput] = useState('');
  const [encryptedOutput, setEncryptedOutput] = useState('');

  const otherUserId = router.query.id;

  const initiateChatSession = async (
    recipientId: string,
    requestDESKey = false
  ) => {
    if (!auth.currentUser) {
      console.error('No user is currently logged in.');
      return;
    }

    let desKey = localStorage.getItem('desKey');
    if (!desKey || requestDESKey) {
      // Generate a new DES key for Client_A
      desKey = CryptoJS.lib.WordArray.random(128 / 8).toString(
        CryptoJS.enc.Hex
      );
      localStorage.setItem('desKey', desKey);
    }

    // Fetch recipient's public RSA key
    const recipientPublicKey = await fetchPublicKey(recipientId);

    // Encrypt the DES key with the recipient's public key
    const encryptedDESKey = encryptWithPublicKey(recipientPublicKey, desKey);

    // Send the encrypted DES key to Client_B
    await sendEncryptedDESKey(
      getChatSessionId(auth.currentUser.uid, recipientId),
      encryptedDESKey
    );
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

  const decryptInputMessage = () => {
    if (!desKey) {
      console.error('DES key is missing.');
      return;
    }

    try {
      const decrypted = decryptWithDES(encryptedInput, desKey);
      // console.log(encryptedInput);
      // console.log(desKey);
      // console.log(decrypted);
      setDecryptedOutput(decrypted as any);
    } catch (error) {
      console.error('Error decrypting message:', error);
      setDecryptedOutput('Failed to decrypt message.');
    }
  };

  const encryptInputMessage = () => {
    if (!desKey) {
      console.error('DES key is missing.');
      return;
    }

    try {
      const plaintext = encryptWithDES(plainTextInput, desKey);
      // console.log(plainTextInput);
      // console.log(desKey);
      // console.log(plaintext);
      setEncryptedOutput(plaintext as any);
    } catch (error) {
      console.error('Error decrypting message:', error);
      setEncryptedOutput('Failed to encrypt message.');
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

  //Call the encrypt API
  const encryptWithDES = async (message: string, key: string) => {
    const response = await fetch('/api/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, key }),
    });

    const data = await response.json();
    return data.encryptedMessage;
  };

  //Call the decrypt API
  const decryptWithDES = async (cipherText: string, key: string) => {
    const response = await fetch('/api/decrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cipherText, key }),
    });

    const data = await response.json();
    return data.decryptedText;
  };

  useEffect(() => {
    const initiateAndSetDESKey = async () => {
      console.log('initiateAndSetDESKey started');

      try {
        console.log(
          'Checking user authentication and otherUserId availability'
        );
        if (!auth.currentUser || !otherUserId) {
          console.error(
            'User not authenticated or otherUserId is not available.'
          );
          return;
        }

        const recipientId = otherUserId.toString();
        console.log(`Recipient ID: ${recipientId}`);
        const chatSessionId = getChatSessionId(
          auth.currentUser.uid,
          recipientId
        );
        console.log(`Chat Session ID: ${chatSessionId}`);

        let key = localStorage.getItem('desKey');
        console.log(`Retrieved DES key from localStorage: ${key}`);

        if (!key) {
          console.log(
            'No DES key found in localStorage, requesting DES key from Client_A'
          );
          await initiateChatSession(recipientId, true);
          console.log('Requested DES key from Client_A');

          const encryptedKey = await checkForExistingDESKey(chatSessionId);
          console.log(`Encrypted DES key received: ${encryptedKey}`);

          const userPrivateKeyPem = getPrivateKeyForCurrentUser();
          console.log(
            `User Private Key: ${userPrivateKeyPem ? 'Found' : 'Not Found'}`
          );

          if (!userPrivateKeyPem) {
            throw new Error('Private key not found.');
          }
          key = decryptWithPrivateKey(encryptedKey, userPrivateKeyPem);
          console.log(`Decrypted DES key: ${key}`);

          localStorage.setItem('desKey', key);
          console.log('Stored DES key in localStorage');
        }

        setDesKey(key);
        console.log('DES key set in state');
      } catch (error) {
        console.error('Error in DES key handling:', error);
      } finally {
        setIsReady(true);
        console.log('Component is now ready');
      }
    };

    console.log('useEffect triggered');
    if (auth.currentUser && otherUserId) {
      console.log(
        'Current user and otherUserId are available, initiating DES key setting'
      );
      initiateAndSetDESKey();
    } else {
      console.log('Current user or otherUserId not available yet');
    }

    // Other useEffect logic for message subscription can remain here
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

        setMessages(fetchedMessages as any);
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

      // Await the encryption result
      const encryptedMessage = await encryptWithDES(message, desKey);

      await addDoc(messagesRef, {
        text: encryptedMessage, // Ensure this is the resolved value
        createdAt: serverTimestamp(),
        senderId: auth.currentUser.uid,
      });

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div>
        <h1 className='mb-4 text-2xl font-bold'>
          Private Chat with {otherUserId}
        </h1>
      </div>

      <div className='my-4 mb-4 rounded border border-gray-200 p-4 shadow-lg'>
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
      </div>
      {/* <div className='my-4 rounded border border-gray-200 p-4 shadow-lg'>
        <input
          type='text'
          value={encryptedInput}
          onChange={(e) => setEncryptedInput(e.target.value)}
          placeholder='Enter encrypted message'
          className='mb-2 w-full rounded border border-gray-300 p-2 text-black'
        />
        <button
          onClick={decryptInputMessage}
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        >
          Decrypt Message
        </button>
        <div className='mt-2 rounded border border-gray-200 bg-gray-100 p-2 text-black'>
          Decrypted Message:{' '}
          <span className='font-semibold text-black'>{decryptedOutput}</span>
        </div>
      </div> */}
      {/* <div className='my-4 rounded border border-gray-200 p-4 shadow-lg'>
        <input
          type='text'
          value={plainTextInput}
          onChange={(e) => setPlainTextInput(e.target.value)}
          placeholder='Enter plain text message'
          className='mb-2 w-full rounded border border-gray-300 p-2 text-black'
        />
        <button
          onClick={encryptInputMessage}
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        >
          Encrypt Message
        </button>
        <div className='mt-2 rounded border border-gray-200 bg-gray-100 p-2 text-black'>
          Encrypted Message:{' '}
          <span className='font-semibold text-black'>{encryptedOutput}</span>
        </div>
      </div> */}
    </div>
  );
};

// Helper function to generate a unique chat session ID
function getChatSessionId(userId1: string, userId2: string) {
  return [userId1, userId2].sort().join('_');
}

export default PrivateChatPage;
