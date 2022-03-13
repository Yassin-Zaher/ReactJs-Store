
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





const config = {
    apiKey: "AIzaSyCqvWGRlqm1E_dtpldRRjeladnnwcI8sI4",
    authDomain: "crwon-db-61e41.firebaseapp.com",
    projectId: "crwon-db-61e41",
    storageBucket: "crwon-db-61e41.appspot.com",
    messagingSenderId: "803520475355",
    appId: "1:803520475355:web:c0dd5501488f5a84611cfe",
    measurementId: "G-TBQ1W7C97Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;