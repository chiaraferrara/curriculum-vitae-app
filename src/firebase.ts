// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATdBGqQjrT5wNG7plVLtyRJagc3fzM6tc",
    authDomain: "curriculum-vitae-e0e7a.firebaseapp.com",
    databaseURL: "https://curriculum-vitae-e0e7a-default-rtdb.firebaseio.com",
    projectId: "curriculum-vitae-e0e7a",
    storageBucket: "curriculum-vitae-e0e7a.appspot.com",
    messagingSenderId: "678459671170",
    appId: "1:678459671170:web:d1e6b6bdc7c1a671616a9b",
    measurementId: "G-4QW6YHFE4V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;