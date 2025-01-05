import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKG4HTK0TVLZYy0wYtyZfTu2Dsv4rQMs",
  authDomain: "test-backend-fbf6b.firebaseapp.com",
  databaseURL:
    "https://test-backend-fbf6b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-backend-fbf6b",
  storageBucket: "test-backend-fbf6b.appspot.com",
  messagingSenderId: "332032628708",
  appId: "1:332032628708:web:a999e6175540817a74d9f1",
  measurementId: "G-J69K1WK6GJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database Instance
export const db = getFirestore(app);

// Firebase Storage Instance
export const storage = getStorage(app);

export default app;
