import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhn_3EK7WOQbrZSrf6J0vailZtzAgXrbs",
  authDomain: "harlows-steak-and-smoke.firebaseapp.com",
  projectId: "harlows-steak-and-smoke",
  storageBucket: "harlows-steak-and-smoke.firebasestorage.app",
  messagingSenderId: "6049886685",
  appId: "1:6049886685:web:8cacc3d626d7abd2930634",
  measurementId: "G-MZLJ2BQ1XY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// THIS IS WHAT YOU WERE MISSING
export const db = getFirestore(app);