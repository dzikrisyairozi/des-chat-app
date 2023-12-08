/* eslint-disable no-console */
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
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
  const { id: otherUserId } = router.query; // Get the chat partner's ID from the URL

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (otherUserId && auth.currentUser) {
      // Construct a unique chat session ID (assuming a function getChatSessionId exists)
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
      const q = query(messagesRef, orderBy('createdAt', 'asc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Message, 'id'>),
        }));
        setMessages(fetchedMessages as Message[]);
      });

      return () => unsubscribe();
    }
  }, [otherUserId]);

  const sendMessage = async () => {
    if (!message.trim() || !auth.currentUser || !otherUserId) return;

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

      await addDoc(messagesRef, {
        text: message,
        createdAt: serverTimestamp(),
        senderId: auth.currentUser.uid,
      });

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setLoading(false);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-2xl font-bold'>
        Private Chat with {otherUserId}
      </h1>
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
      </div>
    </div>
  );
};

// Helper function to generate a unique chat session ID
function getChatSessionId(userId1: string, userId2: string) {
  return [userId1, userId2].sort().join('_');
}

export default PrivateChatPage;
