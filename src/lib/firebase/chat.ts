/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
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
import forge from 'node-forge';

import { db } from './config'; // Adjust the path according to your project structure

const messagesCollectionRef = collection(db, 'messages');

// Function to send a message
export const sendMessage = async (text: string, uid: string) => {
  try {
    await addDoc(messagesCollectionRef, {
      text,
      uid,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error sending message: ', error);
  }
};

// Function to subscribe to messages
export const subscribeToMessages = (callback: (messages: any[]) => void) => {
  const q = query(messagesCollectionRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages);
  });
};

// Function to store a user's public RSA key
export const storePublicKey = async (userId: string, publicKey: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { publicKey });
  } catch (error) {
    console.error('Error storing public key: ', error);
  }
};

// Function to retrieve a user's public RSA key
export const getUserPublicKey = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.publicKey;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user public key: ', error);
    return null;
  }
};

export const encryptWithPublicKey = (publicKeyPem: string, text: string) => {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  const encrypted = publicKey.encrypt(text, 'RSA-OAEP');
  return forge.util.encode64(encrypted);
};

export const decryptWithPrivateKey = (
  privateKeyPem: string,
  encryptedText: string
) => {
  const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
  const decrypted = privateKey.decrypt(
    forge.util.decode64(encryptedText),
    'RSA-OAEP'
  );
  return decrypted;
};
