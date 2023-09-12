import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAGR5lvFzDVxfuIKH_-fCZLSlmnQM5H_E8",
  authDomain: "grabproauth.firebaseapp.com",
  projectId: "grabproauth",
  storageBucket: "grabproauth.appspot.com",
  messagingSenderId: "1050843781232",
  appId: "1:1050843781232:web:2b4c7077e18136faed7cb5",
  measurementId: "G-83QYF1QT6P",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
