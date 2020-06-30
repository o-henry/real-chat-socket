import React from "react";

const RenderMessage = ({ chat, name }: any) => {
  console.log("chat : ", chat);
  console.log("name : ", name);

  return (
    <>
      {chat.map((message: any, idx: any) => {
        return (
          <div key={idx}>
            <span>{name}</span>
            <span>{message}</span>
          </div>
        );
      })}
    </>
  );
};

export default RenderMessage;
