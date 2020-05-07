import * as firebase from 'firebase';
require('firebase/database')

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPbFxaN3jUh_gnJ4XAaMXiVL7TRsncHW4",
  authDomain: "fitness-friend-e86f6.firebaseapp.com",
  databaseURL: "https://fitness-friend-e86f6.firebaseio.com",
  projectId: "fitness-friend-e86f6",
  storageBucket: "fitness-friend-e86f6.appspot.com",
  messagingSenderId: "522547592811",
  appId: "1:522547592811:web:dbee9eb1a9d7c4faad7b2e",
  measurementId: "G-FBCGYPYXH7"
};

let Firebase = firebase.initializeApp(firebaseConfig);

//firebase.firestore() -- doesn't work on ios/andriod
export const db = firebase.database()

export default Firebase
//export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
