/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
// auth.ts
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from './config';

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // Use result.user for the signed-in user information
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
