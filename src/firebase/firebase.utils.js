import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIGvBYM6PTvwTRp-SnAHmiay0ntUz8nxI",
    authDomain: "crwn-db-9de90.firebaseapp.com",
    projectId: "crwn-db-9de90",
    storageBucket: "crwn-db-9de90.appspot.com",
    messagingSenderId: "703329620729",
    appId: "1:703329620729:web:6d73a4bdc8e6f070fa8828",
    measurementId: "G-373FP4WHR3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
