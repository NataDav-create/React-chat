import React, { useState } from "react";
import firebase from "firebase";
import { firestore, auth } from "../firebase";
import s from "./Form.module.css";

const Form = () => {
  /**
   * set single message as empty string and as value for input, setMessage when onChange value of input will be changed
   */
  const [message, setMessage] = useState("");

  /**
   *submit form by click, start with access to firebase, and pass text, createdAt, uid, displayName
   */
  async function handleSubmit(e) {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    await firestore.collection("messages").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
    });
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message..."
        />
        <button className={s.submitBtn}>Send</button>
      </form>
    </div>
  );
};

export default Form;
