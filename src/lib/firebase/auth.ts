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

// Function to sign in with Google and handle RSA key pair generation
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Generate RSA key pair regardless of new or existing user
    const { publicKey, privateKey } = generateRSAKeyPair();

    // Store/update user information and public key in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      name: user.displayName,
      email: user.email,
      publicKey,
      // Add any other user information you want to store
    });

    // Store private key securely on client-side
    localStorage.setItem('privateKey', privateKey);
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
