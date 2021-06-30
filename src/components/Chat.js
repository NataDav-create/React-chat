import React, { useState, useEffect } from "react";
import Form from "./Form";
import { auth, firestore } from "../firebase";
import s from "./Chat.module.css";

const Chat = () => {
  /**
   * set messages to display messages in chat window and to change when snapshot is changed
   */
  const [messages, setMessages] = useState([]);

  /**
   * import database form firebase and access to firebase collection, order messages by created date, limit pages, then if something with change inside collection snapshot will run, and setMessages to data
   */
  useEffect(() => {
    if (firestore) {
      return firestore
        .collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });
    }
  }, []);
  return (
    <ul className={s.chatWrapper}>
      {messages.map(({ id, text, uid, displayName }) => {
        return (
          <li
            key={id}
            className={`message ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <p>{text}</p>
            {displayName ? <p className={s.author}>{displayName}</p> : null}
          </li>
        );
      })}
      <Form />
    </ul>
  );
};

export default Chat;
