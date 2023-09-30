// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFp6Q26Bkc2c_g5ej7FxTLo974VrGXytg",
  authDomain: "sumz-ai-extractor.firebaseapp.com",
  projectId: "sumz-ai-extractor",
  storageBucket: "sumz-ai-extractor.appspot.com",
  messagingSenderId: "761788005759",
  appId: "1:761788005759:web:aef400a15665b0b6f06e4a",
  measurementId: "G-JZ1NMFVHJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);