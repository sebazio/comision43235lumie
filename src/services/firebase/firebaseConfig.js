import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4ofnckr5ETJ1dYSvrZkygxTbvKVdy_v8",
  authDomain: "comision43235.firebaseapp.com",
  projectId: "comision43235",
  storageBucket: "comision43235.appspot.com",
  messagingSenderId: "730000608772",
  appId: "1:730000608772:web:40436c4399b5d34f7f2f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)