import * as firebase from 'firebase/app';
//store images
import 'firebase/storage';
// db
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkuI3Hn92-Gijfz85stm2My6LwshrhX0g",
    authDomain: "lthay-blog.firebaseapp.com",
    projectId: "lthay-blog",
    storageBucket: "lthay-blog.appspot.com",
    messagingSenderId: "197719640990",
    appId: "1:197719640990:web:b8e9038bffe8cdbdfd648f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };