import React from "react";

const RenderMessage = ({ chat, name }: any) => {
  console.log("chat : ", chat);
  console.log("name : ", name);

  return (
    <>
      {chat.map((message: any, idx: any) => {
        console.log("messss", message);
        return (
          <div key={idx}>
            <span>{message.user}</span>
            <span>{message.text}</span>
          </div>
        );
      })}
    </>
  );
};

export default RenderMessage;
