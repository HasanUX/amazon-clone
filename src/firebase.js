import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsXI8lda_e-IheVKqvQ7dERHK0Q2_yJWM",
  authDomain: "hsn-amznclone-1.firebaseapp.com",
  projectId: "hsn-amznclone-1",
  storageBucket: "hsn-amznclone-1.appspot.com",
  messagingSenderId: "1009889404089",
  appId: "1:1009889404089:web:62c1083548f6d1cb81a768",
  measurementId: "G-JCS9XL5FSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
