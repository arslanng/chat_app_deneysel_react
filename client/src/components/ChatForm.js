import React, { useState } from "react";

import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const { setMessages, user, background } = useChat();

  const [message, setMessage] = useState({
    data: "",
    user: user,
    background: background
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage({data: ""});
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message.data}
          onChange={(e) => setMessage({data: e.target.value, user: user, background: background})}
        />
      </form>
    </div>
  );
}

export default ChatForm;
