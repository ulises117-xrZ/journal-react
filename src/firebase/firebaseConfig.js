// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqQQqoI5JAYRTZH1GvuzQLQb_bCadof24",
    authDomain: "movie-app-e505a.firebaseapp.com",
    projectId: "movie-app-e505a",
    storageBucket: "movie-app-e505a.appspot.com",
    messagingSenderId: "269691066078",
    appId: "1:269691066078:web:22ca57b5eb83d05885944f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth();
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
export {app, auth, db, googleAuthProvider};