// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDFkr2evGnC-sNLIlqcdI0gvbLzF9j4F4',
  authDomain: 'des-chat-app.firebaseapp.com',
  projectId: 'des-chat-app',
  storageBucket: 'des-chat-app.appspot.com',
  messagingSenderId: '303515721856',
  appId: '1:303515721856:web:9dcf1ad67cbe3b0da70665',
  measurementId: 'G-0SGDNNJZEM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
