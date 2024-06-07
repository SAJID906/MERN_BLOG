// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // invite we use importe.meta insteade of process.env
  apiKey:"AIzaSyCNWnpC0xxG6nQO03zkKDJYzAnh_n4StTk",
  authDomain: "mern-blogs-e38e9.firebaseapp.com",
  projectId: "mern-blogs-e38e9",
  storageBucket: "mern-blogs-e38e9.appspot.com",
  messagingSenderId: "812052481887",
  appId: "1:812052481887:web:02177db0379157fdc798ea",
  measurementId: "G-MHLE3N8D0X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
