"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALc8JZQqFAttJeS8YJSmVexLpGBrJE8ac",
  authDomain: "twiller-c5f19.firebaseapp.com",
  projectId: "twiller-c5f19",
  storageBucket: "twiller-c5f19.firebasestorage.app",
  messagingSenderId: "130414319854",
  appId: "1:130414319854:web:ac91ec3853aa4fe102bbff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
  export default app;