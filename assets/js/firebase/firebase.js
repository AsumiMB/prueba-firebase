// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyA8qvcwxvtJMZxBuVEttHtkEF8kKJG0i80",
    authDomain: "prueba-1-f19a5.firebaseapp.com",
    projectId: "prueba-1-f19a5",
    storageBucket: "prueba-1-f19a5.appspot.com",
    messagingSenderId: "918422472793",
    appId: "1:918422472793:web:c79092a950e7d835f08948",
    measurementId: "G-BQEM1JMSRL"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// Funciones del CRUD
export const createTask = (title, description) => addDoc(collection(db, "tasks"), {title, description});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));