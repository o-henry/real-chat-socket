import React, { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import io from "socket.io-client";
import * as S from "./style";
import { send } from "../../assets";
import { clear } from "console";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_URL}`);

const Chat = ({ nickname }: any) => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useInput();

  const { msg } = inputs;

  useEffect(() => {
    // socket.on("status", (data: any) => {
    //   console.log("Connected Clients : ", data.numClients);
    // });

    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });

    socket.open();

    return () => {
      socket.close();
    };
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
          <span style={{ color: "blue" }}>{nickname} : </span>
          <span>
            {" "}
            {"\u00A0"}
            {msg}
          </span>
        </S.Chat>
      );
    });
  };

  return (
    <S.Layout>
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
      {renderChat()}
    </S.Layout>
  );
};

export default Chat;
