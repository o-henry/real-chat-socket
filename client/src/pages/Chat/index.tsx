import React, { useState, useEffect } from "react";
import { Message } from "@components/index";
import { ChatTemplate } from "@pages/index";
import { useInput } from "@hooks/index";
import { socketClient } from "@config/socket";

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();
  const { msg, nickname } = inputs;

  const Socket = socketClient(
    nickname,
    msg,
    setChat([...chat, { nickname, msg }])
  );

  useEffect(() => {
    Socket.saveMessage();
  });

  return (
    <>
      <ChatTemplate Message={<Message />} />
    </>
  );
};

export default Chat;
