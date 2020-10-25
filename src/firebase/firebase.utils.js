import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyBMD73t6nrow5Ow5m1H1WXAe0QWFYKtDEs",
        authDomain: "crown-clothing-88c1a.firebaseapp.com",
        databaseURL: "https://crown-clothing-88c1a.firebaseio.com",
        projectId: "crown-clothing-88c1a",
        storageBucket: "crown-clothing-88c1a.appspot.com",
        messagingSenderId: "529053593809",
        appId: "1:529053593809:web:78d5a57e7000cc72fbd5f0",
        measurementId: "G-SHN36HDKYV"
      };

      firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
