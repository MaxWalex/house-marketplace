// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO8eqwI0s_3CQH4tBVkMd5gWB36cy3wnw",
  authDomain: "house-marketplace-app-47060.firebaseapp.com",
  projectId: "house-marketplace-app-47060",
  storageBucket: "house-marketplace-app-47060.appspot.com",
  messagingSenderId: "872161689672",
  appId: "1:872161689672:web:e14bf7d9188b5e3aea187d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()