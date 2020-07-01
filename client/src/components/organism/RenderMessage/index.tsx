import React from "react";
import { useWidth } from "@hooks/index";

const RenderMessage = ({ chat, name }: any) => {
  const width = useWidth();

  return (
    <>
      {chat.map((message: any, idx: any) => {
        console.log("messss", message);
        return (
          <div
            className={
              width == "xs" ? "message-container xs" : "message-container"
            }
            key={idx}
          >
            <div className="message-alert">{message.join}</div>
            {message.count != 0 && (
              <div className="message-alert">{message.count}</div>
            )}
            {/* <hr /> */}
            {message.user && (
              <span
                className={width == "xs" ? "message-user xs" : "message-user"}
              >
                {message.user} :{" "}
              </span>
            )}
            <span
              className={width == "xs" ? "message-text xs" : "message-text"}
            >
              {message.text}
              <span
                className={width == "xs" ? "message-time xs" : "message-time"}
              >
                {message.timestamp}
              </span>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default RenderMessage;
