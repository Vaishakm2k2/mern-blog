// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-badb4.firebaseapp.com",
  projectId: "mern-blog-badb4",
  storageBucket: "mern-blog-badb4.appspot.com",
  messagingSenderId: "151815712115",
  appId: "1:151815712115:web:45c171759a95c0aa3f6906"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);