/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import CryptoJS from 'crypto-js';
import * as React from 'react';
import { useState } from 'react';

import { signInWithGoogle } from '@/lib/firebase/auth';
import { sendMessage, subscribeToMessages } from '@/lib/firebase/chat';
import { auth } from '@/lib/firebase/config';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

interface User {
  uid: string;
}

export interface Message {
  id: string;
  uid: string;
  text: string;
}

export default function HomePage() {
  const [key, setKey] = useState('');
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const [keyWho, setKeyWho] = useState('');
  const [encryptedTextWho, setEncryptedTextWho] = useState('');
  const [decryptedTextWho, setDecryptedTextWho] = useState('');

  const handleEncrypt = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const encrypted = CryptoJS.DES.encrypt(plainText, key).toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const bytes = CryptoJS.DES.decrypt(encryptedText, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(originalText);
  };

  const handleDecryptWho = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const bytes = CryptoJS.DES.decrypt(encryptedTextWho, keyWho);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedTextWho(originalText);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });

    const unsubscribeMessages = subscribeToMessages((newMessages: any) => {
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
      unsubscribeMessages();
    };
  }, []);

  const handleSendMessage = () => {
    if (!user) {
      console.error('User is not signed in.');
      return;
    }

    const encryptedMessage = CryptoJS.DES.encrypt(plainText, key).toString();
    sendMessage(encryptedMessage, user.uid);
    setPlainText('');
    setKey('');
  };

  if (!user) {
    return (
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    );
  }

  return (
    <Layout>
      <Seo templateTitle='DES' />

      <main>
        <section className=''>
          <div className='layout relative flex min-h-screen flex-col py-12 text-center'>
            <Typography as='h1' variant='d2' className='mt-2'>
              Data Encryption Standard Algorithm - Chat App
            </Typography>
            <section className='mt-16'>
              <div>
                <div>
                  {messages.map((msg) => (
                    <p
                      key={msg.id}
                      style={{
                        textAlign: msg.uid === user.uid ? 'right' : 'left',
                      }}
                    >
                      {msg.text}
                    </p>
                  ))}
                </div>
                <div>
                  <input
                    type='text'
                    value={plainText}
                    onChange={(e) => setPlainText(e.target.value)}
                    className='text-black'
                    placeholder='Message'
                  />
                  <input
                    type='text'
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    className='text-black'
                    placeholder='Encryption Key'
                  />
                  <button onClick={handleSendMessage}>Send</button>
                </div>
              </div>
            </section>

            <div className='flex flex-col justify-center gap-8 sm:flex-row'>
              <div className='mt-4 flex w-[360px] flex-col items-center rounded border-2 border-green-600 p-4'>
                <h1 className='text-lg'>Decryption</h1>
                <div className='form mt-2'>
                  <div className='flex flex-col'>
                    <label>Encrypted Text</label>
                    <input
                      className='text-black'
                      type='text'
                      name='encryptedTextWho'
                      value={encryptedTextWho}
                      onChange={(e) => setEncryptedTextWho(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Key</label>
                    <input
                      className='text-black'
                      type='text'
                      name='keyWho'
                      value={keyWho}
                      onChange={(e) => setKeyWho(e.target.value)}
                    />
                  </div>
                  <button
                    className='mt-2 rounded bg-green-700 p-2 text-white'
                    onClick={handleDecryptWho}
                  >
                    Decrypt
                  </button>
                  <div className='mt-2'>
                    <label>Result:</label>
                    <p>{decryptedTextWho}</p>
                  </div>
                </div>
              </div>
            </div>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href=''>
                Data Encryption Standard Algorithm
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
