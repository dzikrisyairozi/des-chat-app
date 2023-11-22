import CryptoJS from 'crypto-js';
import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  const [key, setKey] = useState('');
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

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

  return (
    <Layout>
      <Seo templateTitle='DES' />

      <main>
        <section>
          <div className='layout relative flex min-h-screen flex-col py-12 text-center'>
            <Typography as='h1' variant='d2' className='mt-2'>
              Data Encryption Standard Algorithm - Chat App
            </Typography>

            <div className='flex flex-col justify-center gap-8 sm:flex-row'>
              <div className='mt-4 flex w-[360px] flex-col items-center rounded border-2 border-red-600 p-4'>
                <h1 className='text-lg'>Encryption</h1>
                <div className='form mt-2'>
                  <div className='flex flex-col'>
                    <label>Plaintext</label>
                    <input
                      className='text-black'
                      type='text'
                      name='plaintext'
                      value={plainText}
                      onChange={(e) => setPlainText(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Key</label>
                    <input
                      className='text-black'
                      type='text'
                      name='key'
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                    />
                  </div>
                  <button
                    className='mt-2 rounded bg-red-700 p-2 text-white'
                    onClick={handleEncrypt}
                  >
                    Encrypt
                  </button>
                  <div className='mt-2'>
                    <label>Result:</label>
                    <p>{encryptedText}</p>
                  </div>
                </div>
              </div>
              <div className='mt-4 flex w-[360px] flex-col items-center rounded border-2 border-green-600 p-4'>
                <h1 className='text-lg'>Decryption</h1>
                <div className='form mt-2'>
                  <div className='flex flex-col'>
                    <label>Encrypted Text</label>
                    <input
                      className='text-black'
                      type='text'
                      name='encrypted_text'
                      value={encryptedText}
                      onChange={(e) => setPlainText(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Key</label>
                    <input
                      className='text-black'
                      type='text'
                      name='key'
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                    />
                  </div>
                  <button
                    className='mt-2 rounded bg-green-700 p-2 text-white'
                    onClick={handleDecrypt}
                  >
                    Decrypt
                  </button>
                  <div className='mt-2'>
                    <label>Result:</label>
                    <p>{decryptedText}</p>
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
