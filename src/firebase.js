import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9TL8uIYkJB9Nb-jf0T5Nuu8uEr5VxVdM",
    authDomain: "whatsapp-acd83.firebaseapp.com",
    databaseURL: "https://whatsapp-acd83.firebaseio.com",
    projectId: "whatsapp-acd83",
    storageBucket: "whatsapp-acd83.appspot.com",
    messagingSenderId: "348912108154",
    appId: "1:348912108154:web:db3ecc96da8265ab77f1c3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
