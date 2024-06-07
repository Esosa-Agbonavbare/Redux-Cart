// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOEltB74-jAqMDXHb3bvHVqUa-sDibsg",
  authDomain: "realtime-database-ab1a0.firebaseapp.com",
  databaseURL: "https://realtime-database-ab1a0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtime-database-ab1a0",
  storageBucket: "realtime-database-ab1a0.appspot.com",
  messagingSenderId: "400407200758",
  appId: "1:400407200758:web:267a10c72384c48d1c3dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };