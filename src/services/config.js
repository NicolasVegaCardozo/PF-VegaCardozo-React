import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "techhub-final.firebaseapp.com",
    projectId: "techhub-final",
    storageBucket: "techhub-final.appspot.com",
    messagingSenderId: "668383330675",
    appId: "1:668383330675:web:e462e23f4ce88898704506",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
