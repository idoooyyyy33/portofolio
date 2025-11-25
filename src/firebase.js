// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRIQUUV8rkE08iTzIb58LRjQNoiJlyMrA",
  authDomain: "portofolio-98be2.firebaseapp.com",
  projectId: "portofolio-98be2",
  storageBucket: "portofolio-98be2.firebasestorage.app",
  messagingSenderId: "410265678454",
  appId: "1:410265678454:web:7915857f026d7332316557",
  measurementId: "G-3TR68X25Z3"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
