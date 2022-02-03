// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBItIFrg98SiG1pXRVpn0_cgp9CyWKlpWI",
  authDomain: "sparta-react-b2fc4.firebaseapp.com",
  projectId: "sparta-react-b2fc4",
  storageBucket: "sparta-react-b2fc4.appspot.com",
  messagingSenderId: "95343310291",
  appId: "1:95343310291:web:7df24665f578ea513d6b26",
  measurementId: "G-0L1WMSVW5P"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();