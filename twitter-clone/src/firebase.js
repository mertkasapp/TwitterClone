import firebase from "firebase";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAYOp_cuNB9uPU9cWOPdPCMu5VhiyZJxSI",
    authDomain: "twitter-clone-92c91.firebaseapp.com",
    projectId: "twitter-clone-92c91",
    storageBucket: "twitter-clone-92c91.appspot.com",
    messagingSenderId: "469794832875",
    appId: "1:469794832875:web:c44fb52e0cd92bf65a99ae",
    measurementId: "G-TD5GT0EC30"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
  const db = firebase.firestore();
  export default db;