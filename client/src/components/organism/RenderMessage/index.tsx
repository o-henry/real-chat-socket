import React from "react";

const RenderMessage = ({ chat }: any) => {
  console.log("chat : ", chat);

  return (
    <>
      {chat.map(({ message }: any, idx: any) => {
        return (
          <div key={idx}>
            <span style={{ color: "black" }}>{message}</span>
          </div>
        );
      })}
    </>
  );
};

export default RenderMessage;
