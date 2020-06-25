import React, { useState, useEffect } from "react";
import { RenderMessage } from "@components/index";
import { ChatTemplate } from "@pages/index";
import { useInput } from "@hooks/index";
import { socketClient } from "@config/socket";

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();
  const { msg, nickname } = inputs;

  const socket = socketClient();

  useEffect(() => {
    // setChat([...chat, { nickname, msg }]);
    socket.message(nickname, msg);

    return () => {
      socket.disconnect();
      socket.close();
    };
  }, [socket, nickname, msg]);

  return (
    <>
      <ChatTemplate
        msg={msg}
        nickname={nickname}
        setInputs={setInputs}
        handleKeyDown={socket.handleKeyDown}
        onSubmitMessage={socket.onSubmitMessage}
        Message={<RenderMessage chat={chat} />}
      />
    </>
  );
};

export default Chat;
