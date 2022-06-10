import * as firebase from 'firebase/compact/app';
//store images
import 'firebase/storage';
// db
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkuI3Hn92-Gijfz85stm2My6LwshrhX0g",
    authDomain: "lthay-blog.firebaseapp.com",
    projectId: "lthay-blog",
    storageBucket: "lthay-blog.appspot.com",
    messagingSenderId: "197719640990",
    appId: "1:197719640990:web:b8e9038bffe8cdbdfd648f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };