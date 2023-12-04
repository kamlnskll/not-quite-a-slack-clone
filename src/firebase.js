import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDA2YgZfI1GRfoKRo5e54wStZU97zVk5lg",
  authDomain: "not-a-slack-clone.firebaseapp.com",
  projectId: "not-a-slack-clone",
  storageBucket: "not-a-slack-clone.appspot.com",
  messagingSenderId: "1069413014003",
  appId: "1:1069413014003:web:5c160f56f2b9f6a46e1a86",
  measurementId: "G-KS13VKXLTV"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app)