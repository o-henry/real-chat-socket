import React, { useState, useEffect } from "react";
import { Message } from "@components/index";
import { ChatTemplate } from "@pages/index";
import { useInput } from "@hooks/index";
import { socket, socketClient } from "@config/socket";

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();
  const { msg, nickname } = inputs;

  const Socket = socketClient(nickname, msg);

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });
  });

  return (
    <>
      <ChatTemplate
        msg={msg}
        nickname={nickname}
        setInputs={setInputs}
        handleKeyDown={Socket.handleKeyDown}
        onSubmitMessage={Socket.onSubmitMessage}
        Message={<Message chat={chat} />}
      />
    </>
  );
};

export default Chat;
