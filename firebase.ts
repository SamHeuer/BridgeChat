// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDE_mlDKJL13zwkHwnYUQ2RpnWNsOMUtKE",
  authDomain: "bridge--chat.firebaseapp.com",
  projectId: "bridge--chat",
  storageBucket: "bridge--chat.appspot.com",
  messagingSenderId: "925106644084",
  appId: "1:925106644084:web:ba409d38bfa978e13bdd21",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
