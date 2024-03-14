// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApse2Vp1fpd_UsZ1uvFbj8_fH1bOtsnu8",
  authDomain: "curriculumvitae-chiara.firebaseapp.com",
  projectId: "curriculumvitae-chiara",
  storageBucket: "curriculumvitae-chiara.appspot.com",
  messagingSenderId: "712086488133",
  appId: "1:712086488133:web:768a0feb3418fa08194f2c",
  measurementId: "G-1CRMC329YG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;