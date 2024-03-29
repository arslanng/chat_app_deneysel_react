import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";

function Container() {
  const { setMessages, user, setUser, background, setBackground } = useChat();
  const [userName, setUserName] = useState("") 

  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => setMessages(messages))

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  if(userName)
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(user);
    console.log(user, background)
  }

  return(
    <div className={styles.user}>
      <h1>Chat Odamıza Hoşgeldiniz</h1>
      <form onSubmit={handleSubmit}>
        <label>Arka plan rengi seçiniz: </label>
        <input type={"color"} value={background} onChange={(e)=>setBackground(e.target.value)}/>
        <br /><br />
        <label>Kullanıcı adı: </label>
        <input value={user} onChange={(e)=>setUser(e.target.value)}/> 
      </form>
    </div>
  )
}

export default Container;
