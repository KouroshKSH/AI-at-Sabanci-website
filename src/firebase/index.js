// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3tgPSFYzlOFNU0pox6A9mMq__6BRIrI",
  authDomain: "fillerprojforghub.firebaseapp.com",
  projectId: "fillerprojforghub",
  storageBucket: "fillerprojforghub.appspot.com",
  messagingSenderId: "640599195024",
  appId: "1:640599195024:web:bb679c8c6d1f1a43dc0715",
  measurementId: "G-TT1C4TD248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
