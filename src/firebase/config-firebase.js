import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbTYHZSyrsoLiMk1AknmtWK4kxgnzFC44",
    authDomain: "mis-finanzas-8441a.firebaseapp.com",
    projectId: "mis-finanzas-8441a",
    storageBucket: "mis-finanzas-8441a.appspot.com",
    messagingSenderId: "928454485831",
    appId: "1:928454485831:web:8a84599d77af58392bce62"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  
export { firebase, db, googleAuthProvider }