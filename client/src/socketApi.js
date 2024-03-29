import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");
  socket = io("http://10.182.183.113:3000/", {
    //backendimiz neredeyse onun urlsi girilir.
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Connected")); //socket connect olduğunda çalışacak fonksiyon.
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
  // socket.emit() işleminde ilk parametre gönderilecek kanalı ikincisi gönderilecek olan veriyi belirtir.
};

export const subscribeChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Yeni mesaj var", message);
    cb(message);
  });
};

export const subscribeInitialMessages = (cb) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    console.log("Initial", messages);
    cb(messages);
  });
};
