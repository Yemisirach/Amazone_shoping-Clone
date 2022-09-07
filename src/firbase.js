// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7cfl0UzMn9hR2tU8Ayfw8QnNjbfkZmh0",
  authDomain: "clone-8bc56.firebaseapp.com",
  projectId: "clone-8bc56",
  storageBucket: "clone-8bc56.appspot.com",
  messagingSenderId: "193277983229",
  appId: "1:193277983229:web:7206b08f8d4d1217cec194",
  measurementId: "G-78Y1913HSF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);

// The latest update for auth with db
const auth = firebase.auth();
export const db = app.firestore();

export default auth;
