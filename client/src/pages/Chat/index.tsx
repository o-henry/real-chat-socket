import React, { useState, useEffect } from "react";
import { RenderMessage } from "@components/index";
import { ChatTemplate } from "@pages/index";
import { useInput } from "@hooks/index";
import { socket, socketClient } from "@config/socket";

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();
  const { msg, nickname } = inputs;

  const Socket = socketClient();

  useEffect(() => {
    socket.on("message", () => {
      console.log("test", nickname, msg);
      setChat([...chat, { nickname, msg }]);
    });
    return () => {
      Socket.disconnect();
      Socket.close();
    };
  }, [Socket, nickname, msg]);

  return (
    <>
      <ChatTemplate
        msg={msg}
        nickname={nickname}
        setInputs={setInputs}
        handleKeyDown={Socket.handleKeyDown}
        onSubmitMessage={Socket.onSubmitMessage}
        Message={<RenderMessage chat={chat} />}
      />
    </>
  );
};

export default Chat;
