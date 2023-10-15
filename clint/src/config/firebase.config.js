import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBE0F71b2pfcNy3MbVbzkUT4w2B1NwA6h0",
  authDomain: "user-management-system-bbab5.firebaseapp.com",
  projectId: "user-management-system-bbab5",
  storageBucket: "user-management-system-bbab5.appspot.com",
  messagingSenderId: "273560917252",
  appId: "1:273560917252:web:51c46bf169aafe7d91ec51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
