import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const auth = getAuth(app);

