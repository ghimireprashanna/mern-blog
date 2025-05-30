// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2b098.firebaseapp.com",
  projectId: "mern-blog-2b098",
  storageBucket: "mern-blog-2b098.firebasestorage.app",
  messagingSenderId: "727494825029",
  appId: "1:727494825029:web:b860c2d998cfe51e907f2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);