import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/**
 * get configurations from firebase object
 */

firebase.initializeApp({
  apiKey: "AIzaSyDzUAoueSxo0Ru4HxL2BYGbREIRvnAB630",
  authDomain: "chat-8863a.firebaseapp.com",
  databaseURL: "https://chat-8863a-default-rtdb.firebaseio.com",
  projectId: "chat-8863a",
  storageBucket: "chat-8863a.appspot.com",
  messagingSenderId: "96901470997",
  appId: "1:96901470997:web:8f655cbf79932b7d59e71c",
});


/**
 * access to authentication
 */
const auth = firebase.auth();

/**
 * access to database
 */
const firestore = firebase.firestore();

export {
  auth,
  firestore
};