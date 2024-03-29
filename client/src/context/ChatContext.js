import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("")
  const [background, setBackground] = useState("#ffffff")
  const values = {
    messages,
    setMessages,
    user,
    setUser,
    background,
    setBackground
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
