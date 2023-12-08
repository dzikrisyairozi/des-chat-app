/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
// auth.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

// Function to sign in with Google and handle RSA key pair generation
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if the user is new or returning
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // New user, generate RSA key pair
      const { publicKey, privateKey } = generateRSAKeyPair();

      // Store public key in Firebase
      await setDoc(userDocRef, { publicKey });

      // Store private key securely on client-side
      localStorage.setItem('privateKey', privateKey);
    }
  } catch (error) {
    console.error('Error during Google sign-in: ', error);
  }
};
