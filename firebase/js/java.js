 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);