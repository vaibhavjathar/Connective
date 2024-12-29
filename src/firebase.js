import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
 
const firebaseConfig = {
    apiKey: "AIzaSyAs5unMVk7EY31bwPYiS3Y6iX51_f1DK2g",
    authDomain: "connective-24ec1.firebaseapp.com",
    projectId: "connective-24ec1",
    storageBucket: "connective-24ec1.firebasestorage.app",
    messagingSenderId: "529776797610",
    appId: "1:529776797610:web:3d49a1e974cff2cc9e2dd3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;