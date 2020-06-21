import React, { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import io from "socket.io-client";
import * as S from "./style";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_URL}`);

const Chat = ({ nickname }: any) => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();
  const { msg } = inputs;

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });
  });

  const onMessageSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    socket.emit("chat message", { nickname, msg });
    setInputs({
      ...chat,
      [msg]: "",
    });
  };

  const renderChat = () => {
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
      <S.Message>
        <textarea name="msg" value={msg} onChange={setInputs} />
        <button onClick={onMessageSubmit}>Send</button>
      </S.Message>
      <div>{renderChat()}</div>
    </>
  );
};

export default Chat;
