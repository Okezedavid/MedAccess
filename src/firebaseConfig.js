// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLkmU4SQdHFERrhKtdMZ_ufqnrG818j0E",
  authDomain: "medaccess-31c4d.firebaseapp.com",
  projectId: "medaccess-31c4d",
  storageBucket: "medaccess-31c4d.appspot.com",
  messagingSenderId: "986629636933",
  appId: "1:986629636933:web:318c4f493f6ea30eb6342c",
  measurementId: "G-J6X75SJQ05"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth, app };

