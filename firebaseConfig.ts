// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3tZz7m-WOu59_pLpj39qMmxNooGKNYZU",
  authDomain: "image-uploader-devchallengesio.firebaseapp.com",
  projectId: "image-uploader-devchallengesio",
  storageBucket: "image-uploader-devchallengesio.appspot.com",
  messagingSenderId: "677325124781",
  appId: "1:677325124781:web:1ebb0cd768fd7cda34c224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
