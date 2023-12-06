// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz5VP9zV9hhRf874XEGW0uDO4IBj8Y3vI",
  authDomain: "newsapp-67e7f.firebaseapp.com",
  projectId: "newsapp-67e7f",
  storageBucket: "newsapp-67e7f.appspot.com",
  messagingSenderId: "111286903383",
  appId: "1:111286903383:web:c7dda34460183736e57912"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);