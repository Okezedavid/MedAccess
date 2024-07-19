import {initializeApp, getApp, getApps} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyCLkmU4SQdHFERrhKtdMZ_ufqnrG818j0E",
  authDomain: "medaccess-31c4d.firebaseapp.com",
  projectId: "medaccess-31c4d",
  storageBucket:  "medaccess-31c4d.appspot.com",
  messagingSenderId:  "986629636933",
  appId: "1:986629636933:web:318c4f493f6ea30eb6342c",
  measurementId:  "G-J6X75SJQ05"
};

const app = initializeApp(firebaseConfig)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

const auth = getAuth(app);

export {firestore, auth , app};

















// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCLkmU4SQdHFERrhKtdMZ_ufqnrG818j0E",
//   authDomain: "medaccess-31c4d.firebaseapp.com",
//   projectId: "medaccess-31c4d",
//   storageBucket: "medaccess-31c4d.appspot.com",
//   messagingSenderId: "986629636933",
//   appId: "1:986629636933:web:318c4f493f6ea30eb6342c"
//   // measurementId: "G-J6X75SJQ05"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };