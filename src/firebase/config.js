import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDdPiGL5HphixlvSvzQFAWvti6dI0HNBqI',
  authDomain: 'jungram-cda6d.firebaseapp.com',
  projectId: 'jungram-cda6d',
  storageBucket: 'jungram-cda6d.appspot.com',
  messagingSenderId: '672617633142',
  appId: '1:672617633142:web:7283ebe08eb5cdc8311657',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
