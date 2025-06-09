// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bf461.firebaseapp.com",
  projectId: "mern-blog-bf461",
  storageBucket: "mern-blog-bf461.firebasestorage.app",
  messagingSenderId: "913305294996",
  appId: "1:913305294996:web:3f4812a155f1bbac86bc81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

