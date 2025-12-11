// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCALS8hYNf5Ji_KZmjVuxi_DJVkileJIos",
  authDomain: "login-app-9c6b7.firebaseapp.com",
  projectId: "login-app-9c6b7",
  storageBucket: "login-app-9c6b7.firebasestorage.app",
  messagingSenderId: "187545124827",
  appId: "1:187545124827:web:5ef16793cf9d45e961b1fe",
  measurementId: "G-F3ECMYHZW5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };



