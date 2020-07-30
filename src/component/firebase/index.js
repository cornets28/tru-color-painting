import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmMUA4MjjwYni117v0Tqmzg0xwomCqCH4",
  authDomain: "tru-color-painting-7f9d9.firebaseapp.com",
  databaseURL: "https://tru-color-painting-7f9d9.firebaseio.com",
  projectId: "tru-color-painting-7f9d9",
  storageBucket: "tru-color-painting-7f9d9.appspot.com",
  messagingSenderId: "55917912067",
  appId: "1:55917912067:web:e32f0260244e9e85b72e36",
  measurementId: "G-2WTXVJCX3F",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
