// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLkmU4SQdHFERrhKtdMZ_ufqnrG818j0E",
  authDomain: "medaccess-31c4d.firebaseapp.com",
  projectId: "medaccess-31c4d",
  storageBucket: "medaccess-31c4d.appspot.com",
  messagingSenderId: "986629636933",
  appId: "1:986629636933:web:318c4f493f6ea30eb6342c",
  measurementId: "G-J6X75SJQ05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);