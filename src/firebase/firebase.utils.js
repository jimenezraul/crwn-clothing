import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfNpCMExf9B75VeKBqN36BwL0VGQ2TcJA",
    authDomain: "crown-db-e58c2.firebaseapp.com",
    databaseURL: "https://crown-db-e58c2.firebaseio.com",
    projectId: "crown-db-e58c2",
    storageBucket: "crown-db-e58c2.appspot.com",
    messagingSenderId: "250343006658",
    appId: "1:250343006658:web:b6deeaf2bae84d513d765b",
    measurementId: "G-H3R906033P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;