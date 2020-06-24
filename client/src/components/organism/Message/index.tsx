import React from "react";

const Message = ({ chat }: any) => {
  return (
    <>
      {chat.map(({ nickname, msg }: any, idx: any) => {
        return (
          <div key={idx}>
            <span style={{ color: "red" }}>{nickname}</span>
            <span>{msg}</span>
          </div>
        );
      })}
    </>
  );
};

export default Message;
