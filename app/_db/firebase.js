// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUspcgXoiO88qlKYfJL09Lt7oeiSkqFLw",
  authDomain: "hackdavis24-9e29b.firebaseapp.com",
  databaseURL: "https://hackdavis24-9e29b-default-rtdb.firebaseio.com",
  projectId: "hackdavis24-9e29b",
  storageBucket: "hackdavis24-9e29b.appspot.com",
  messagingSenderId: "1084099933585",
  appId: "1:1084099933585:web:38501177e4d1871e429630",
  measurementId: "G-1Q4TF04S63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
