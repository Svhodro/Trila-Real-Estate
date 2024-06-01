// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmB_JSGcX8Q_RwUIgzWB1SkRp9KE2aTdk",
  authDomain: "trila-58320.firebaseapp.com",
  projectId: "trila-58320",
  storageBucket: "trila-58320.appspot.com",
  messagingSenderId: "713278579813",
  appId: "1:713278579813:web:4bf065d76f34197544d28c",
  measurementId: "G-26GD9NZDYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app