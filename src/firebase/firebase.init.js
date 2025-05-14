// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwD13t6MI4P04UcfsHqPRCuyjM69kL2G0",
  authDomain: "simple-firebase-dimple-copy.firebaseapp.com",
  projectId: "simple-firebase-dimple-copy",
  storageBucket: "simple-firebase-dimple-copy.firebasestorage.app",
  messagingSenderId: "858261884876",
  appId: "1:858261884876:web:ae96770f09c2dd81ea1769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);