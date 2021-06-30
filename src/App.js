import React, { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  /**
   * set to show and hide chat window and to show and hide modal text
   */
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="container">
      <Auth setShowChat={setShowChat} />
      {showChat && <Chat />}
      {!showChat && (
        <p className="modalText">Please Sign In to start chatting</p>
      )}
    </div>
  );
}

export default App;
