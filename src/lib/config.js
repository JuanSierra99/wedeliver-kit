import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBrokmk7iaYJ-qAVMnmVUrCxCFBmH_tw",
  authDomain: "wedeliver-18a9a.firebaseapp.com",
  projectId: "wedeliver-18a9a",
  storageBucket: "wedeliver-18a9a.appspot.com",
  messagingSenderId: "779462882062",
  appId: "1:779462882062:web:aa9edc3d25ceccd6655d5f",
  measurementId: "G-ZC8PJVHHM4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;


//getAuth() is the recommended approach for accessing the Auth service in newer versions of Firebase.
firebase.auth() 
// is used in older versions of Firebase, especially in codebases that have not been updated to use the modular SDK.