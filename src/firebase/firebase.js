// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZnq552k0RM2Q2ilalQiQM4pwfvqh0p4E",
  authDomain: "fir-91f44.firebaseapp.com",
  projectId: "fir-91f44",
  storageBucket: "fir-91f44.appspot.com",
  messagingSenderId: "558968262497",
  appId: "1:558968262497:web:52108ec26b4ffe449b7f20",
  measurementId: "G-FHHJX3RDKG"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app