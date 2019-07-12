import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDhsFrYfpUzcjLGOkOjqB4G5pORHr1SkU",
  authDomain: "crwn-db-2ef96.firebaseapp.com",
  databaseURL: "https://crwn-db-2ef96.firebaseio.com",
  projectId: "crwn-db-2ef96",
  storageBucket: "",
  messagingSenderId: "1035540809151",
  appId: "1:1035540809151:web:9568c80727c6c032"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;