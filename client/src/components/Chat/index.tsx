import React, { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import io from "socket.io-client";
import * as S from "./style";
import { send } from "../../assets";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_URL}`);

const Chat = ({ nickname }: any) => {
  const [count, setCount] = useState("");
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();

  const { msg } = inputs;

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
      console.log("test");
    });
    socket.on("status", (data: any) => {
      console.log("heehehehe");
      console.log("Connected Clients : ", data.numClients);
    });
  });

  const onMessageSubmit = () => {
    socket.emit("chat message", { nickname, msg });
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == "Enter" && msg != "") {
      onMessageSubmit();
    }
  };

  const renderChat = () => {
    return chat.map(({ nickname, msg }: any, idx: any) => {
      return (
        <S.Chat key={idx}>
          <span style={{ color: "green" }}>{nickname}: </span>
          <span>{msg}</span>
        </S.Chat>
      );
    });
  };

  return (
    <>
      <S.Message>
        <S.Textarea
          className="text-area"
          name="msg"
          value={msg}
          onChange={setInputs}
          onKeyDown={handleKeyDown}
          placeholder="Type a message here"
        />
        <S.Button onClick={onMessageSubmit}>
          <S.Img src={send} alt="send message" />
        </S.Button>
      </S.Message>
      <span>{count}</span>

      <div>{renderChat()}</div>
    </>
  );
};

export default Chat;
