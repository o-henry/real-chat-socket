import React, { useState, useEffect } from "react";
import { ChatTemplate } from "@pages/index";
import queryString from "query-string";
import io from "socket.io-client";

export const socket = io.connect(
  `${process.env.REACT_APP_SOCKET_URL}` || `${process.env.REACT_APP_HEROKU_URL}`
);

const Chat = ({ location }: any) => {
  const [name, setName] = useState<any>("");
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState<any>([]);

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setName(name);
    socket.emit("join", name);
  }, [socket, location.search]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setAllMessage((allMessage: any) => [...allMessage, message]);
    });
    return () => {
      socket.emit("disconnect");
    };
  }, []);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (message) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const handleClick = (e: any) => {
    sendMessage(e);
  };

  return (
    <>
      <ChatTemplate
        message={message}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleClick={handleClick}
        allMessage={allMessage}
        name={name}
      />
    </>
  );
};

export default Chat;
