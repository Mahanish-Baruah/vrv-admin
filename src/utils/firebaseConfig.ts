// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwb5xK-0gjd7AmpdDHDuGJvsVx0HZ2-7o",
  authDomain: "vrv-admin.firebaseapp.com",
  projectId: "vrv-admin",
  storageBucket: "vrv-admin.firebasestorage.app",
  messagingSenderId: "144572618118",
  appId: "1:144572618118:web:fa815609030df6eb390807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;