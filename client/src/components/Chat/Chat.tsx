import React, { useState, useEffect } from "react";
import useChatInput from "../../hooks/useInput";
import io from "socket.io-client";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_URL}`);

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useChatInput();
  const { msg, nickname } = inputs;

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });
  });

  const onMessageSubmit = () => {
    socket.emit("chat message", { nickname, msg });
  };

  const renderChat = () => {
    console.log("chat", chat);
    return chat.map(({ nickname, msg }: any, idx: any) => {
      return (
        <div key={idx}>
          <span style={{ color: "green" }}>{nickname}: </span>
          <span>{msg}</span>
        </div>
      );
    });
  };

  return (
    <>
      <span>Nickname</span>
      <input name="nickname" value={nickname} onChange={setInputs} />
      <input name="msg" value={msg} onChange={setInputs} />
      <button onClick={onMessageSubmit}>Send</button>
      <div>{renderChat()}</div>
    </>
  );
};

export default Chat;
