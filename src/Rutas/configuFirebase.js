
//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
//  import{getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   getRedirectResult,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signOut,
//  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js" 
 
//  import {
//   getFirestore,
//   collection,
//   doc,
//   addDoc,
//   getDoc,
//   getDocs,
//   onSnapshot,
// } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
 
  
 
 
 //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const firebaseConfig = {
   apiKey: "AIzaSyC5wb6i1-kguUQxeBU5KDY2xbBS392bZf0",
   authDomain: "norma-b8e09.firebaseapp.com",
   projectId: "norma-b8e09",
   storageBucket: "norma-b8e09.appspot.com",
   messagingSenderId: "195865777244",
   appId: "1:195865777244:web:8e6f087f8e6271ecc10299",
   measurementId: "G-0J708YEM38"
 };
 // Initialize Firebase
 //export const app = initializeApp(firebaseConfig);
 
 // hacemos una funcion para poder exportarla e independizarla de firebase
//  export function appInit () {
//  const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);
//  const db = getFirestore();
//  console.log(db)
//  return { app, auth, db };

// }

//exportamos las funciones como objetos independientes de firebase
// export {
//   signInWithPopup,
//   GoogleAuthProvider,
//   getRedirectResult,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signOut,
//   collection,
//   addDoc,
//   getDocs,
//   onSnapshot,
//   getDoc,
//   doc
// };


