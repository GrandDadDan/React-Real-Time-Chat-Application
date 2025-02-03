
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtrRzi5BqFqueLbiLpmFP9EbgYu9z0Uv4",
  authDomain: "real-time-chat-86a54.firebaseapp.com",
  projectId: "real-time-chat-86a54",
  storageBucket: "real-time-chat-86a54.firebasestorage.app",
  messagingSenderId: "97948933184",
  appId: "1:97948933184:web:44153bde7256f7f5c613a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();


