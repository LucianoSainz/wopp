import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyD2a5beVdrx9q-pTsPIBWv-W-12BBHZx-A",
        authDomain: "wopp-db.firebaseapp.com",
        databaseURL: "https://wopp-db.firebaseio.com",
        projectId: "wopp-db",
        storageBucket: "wopp-db.appspot.com",
        messagingSenderId: "554374742753",
        appId: "1:554374742753:web:9dfb6bda7c77146a7c2da0",
        measurementId: "G-JNLWSLTTP9"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});

      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;
