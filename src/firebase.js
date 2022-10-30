import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA41DnudCSwIcmCkIMob8E8ANDucY1qo5I",
  authDomain: "legalverse-ap.firebaseapp.com",
  projectId: "legalverse-ap",
  storageBucket: "legalverse-ap.appspot.com",
  messagingSenderId: "1001027888129",
  appId: "1:1001027888129:web:1c0c894378136d49598c00",
  measurementId: "G-3XXQL9JZK9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
