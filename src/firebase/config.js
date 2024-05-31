// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtCdog6yBiWI13JnuNFG3HFoY0G-wdRc",
  authDomain: "proyecto-residencia-3b148.firebaseapp.com",
  projectId: "proyecto-residencia-3b148",
  storageBucket: "proyecto-residencia-3b148.appspot.com",
  messagingSenderId: "869557245661",
  appId: "1:869557245661:web:fadea14dfa9730178b6d34"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);