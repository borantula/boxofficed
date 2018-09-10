import firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXxW-qPfrgdjqxX4yAOeL1qiK2H9NhJBE",
  authDomain: "money-maker-movies.firebaseapp.com",
  databaseURL: "https://money-maker-movies.firebaseio.com",
  projectId: "money-maker-movies",
  storageBucket: "money-maker-movies.appspot.com",
  messagingSenderId: "571614524129",
});

export default firebaseApp;
