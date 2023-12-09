/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-imports */
// auth.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import forge from 'node-forge';

import { auth, db } from './config'; // Ensure db is imported from your Firebase config

// Function to generate RSA key pair
const generateRSAKeyPair = () => {
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
  const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
  const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
  return { publicKey, privateKey };
};

const verifyKeyPair = (publicKeyPem: string, privateKeyPem: string) => {
  try {
    // Test message for encryption and decryption
    const testMessage = 'test';

    // Encrypt the test message with the public key
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encrypted = forge.util.encode64(
      publicKey.encrypt(testMessage, 'RSA-OAEP')
    );

    // Decrypt the message with the private key
    const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const decrypted = privateKey.decrypt(
      forge.util.decode64(encrypted),
      'RSA-OAEP'
    );

    // Check if decrypted message matches the original test message
    return decrypted === testMessage;
  } catch (error) {
    console.error('Error in key pair verification:', error);
    return false;
  }
};

// Function to sign in with Google and handle RSA key pair generation
// auth.ts

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      const { publicKey, privateKey } = generateRSAKeyPair();

      await setDoc(userDocRef, {
        name: user.displayName,
        email: user.email,
        publicKey,
      });

      localStorage.setItem('privateKey', privateKey);
    } else {
      const userData = userDoc.data();
      if (userData && userData.publicKey) {
        const privateKeyPem = localStorage.getItem('privateKey');
        if (
          privateKeyPem &&
          !verifyKeyPair(userData.publicKey, privateKeyPem)
        ) {
          console.error('Public and private keys do not match.');
          // Handle the mismatch case appropriately
          // For instance, prompt the user to re-authenticate or re-generate the key pair
        }
      } else if (!userData || !userData.publicKey) {
        console.warn('User data or public key not found in Firestore.');
        // Handle the case where user data or public key is missing
      }

      if (!localStorage.getItem('privateKey')) {
        console.warn(
          'Private key not found in local storage for existing user.'
        );
        // Handle missing private key scenario
      }
    }
  } catch (error) {
    console.error('Error during Google sign-in: ', error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out: ', error);
  }
};
