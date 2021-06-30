import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase.js";
import s from "./Auth.module.css";

const Auth = ({ setShowChat }) => {
  const [authentication, setAuthentication] = useState(null);

  /**
   * function for user authentication by click
   * as a provider is GoogleAuthProvider
   */
  const makeAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  /**
   * functionto sign out by click
   */
  const logOut = () => auth.signOut();

  /**
   * render only when authentication is changed
   */
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      /**
       * if authentication is done then setAuthentication as true and show chat
       */
      if (user) {
        setAuthentication(user);
        setShowChat(true);
      } else {
        setAuthentication(null);
        setShowChat(false);
      }
    });
  }, [authentication]);
  return (
    <div>
      <button
        className={s.authBtn}
        onClick={authentication ? logOut : makeAuth}
      >
        {authentication ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default Auth;
