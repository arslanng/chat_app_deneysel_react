import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";

function ChatItem({ item }) {
  const { user, background } = useChat();
  return (
    <div
      style={{ backgroundColor: item.message.background }}
      className={`${styles.chatItem} ${item.message.user == user ? styles.right : ""}`}
    >
      <span style={{fontSize: "small", textDecoration: "underline"}}>{item.message.user}</span>: {item.message.data}
    </div>
  );
}

export default ChatItem;
