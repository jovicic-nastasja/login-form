import firebase from 'firebase';

// Firebase configuration settings
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
const fire = firebase.initializeApp(config);
export default fire;