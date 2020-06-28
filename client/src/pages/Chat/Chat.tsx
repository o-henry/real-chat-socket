import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const socket = io.connect(
  `${process.env.REACT_APP_SOCKET_URL}` || `${process.env.REACT_APP_HEROKU_URL}`
);

const Chat = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState<any>([]);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setAllMessage((allMessage: any) => [...allMessage, message]);
    });
    return () => {
      socket.emit("disconnect");
    };
  }, []);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (message) {
      socket.emit("message", message, () => setMessage(""));
    }
    setMessage("");
  };

  console.log("me", allMessage);

  return (
    <>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button onClick={(e) => sendMessage(e)}>클릭</button>
      <div>
        {allMessage.map((message: any, idx: any) => {
          console.log("aaaa", message);
          return <div key={idx}>{message}</div>;
        })}
      </div>
    </>
  );
};

export default Chat;
