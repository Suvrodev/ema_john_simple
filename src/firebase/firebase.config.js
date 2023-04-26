// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LdPJ7NIlP4vBGDzFc_qgXailAcXJVfw",
  authDomain: "ema-john-with-firebase-a-fce1b.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-fce1b",
  storageBucket: "ema-john-with-firebase-a-fce1b.appspot.com",
  messagingSenderId: "915079582212",
  appId: "1:915079582212:web:7a8df1af192af56ce69b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app