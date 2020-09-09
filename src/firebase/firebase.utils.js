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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;

}
    
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;