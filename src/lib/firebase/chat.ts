/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';

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
