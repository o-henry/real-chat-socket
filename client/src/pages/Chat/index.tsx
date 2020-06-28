import React, { useState, useEffect } from "react";
import { RenderMessage, Button, Input } from "@components/index";
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

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const handleClick = (e: any) => {
    sendMessage(e);
  };

  console.log("me", allMessage);

  return (
    <>
      <Input
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleClick}>클릭</Button>
      <RenderMessage chat={allMessage} />
    </>
  );
};

export default Chat;
