import React from "react";

const RenderMessage = ({ chat, name }: any) => {
  console.log("chat : ", chat);
  console.log("name : ", name);

  return (
    <>
      {chat.map((message: any, idx: any) => {
        console.log("maaaa", message);
        return (
          <div key={idx}>
            <span>{name}</span>
            <span style={{ color: "yellow" }}>{message}</span>
          </div>
        );
      })}
    </>
  );
};

export default RenderMessage;
