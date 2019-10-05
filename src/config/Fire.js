import firebase from 'firebase';

// Firebase configuration settings
const config = {
  apiKey: "AIzaSyBDGQY6xt6XhJHiXdNGSSgW0NF4wiKIFiA",
  authDomain: "login-form-82502.firebaseapp.com",
  databaseURL: "https://login-form-82502.firebaseio.com",
  projectId: "login-form-82502",
  storageBucket: "login-form-82502.appspot.com",
  messagingSenderId: "351591800454"
};
const fire = firebase.initializeApp(config);
export default fire;