import React from "react";
import { IChat } from "@interface/chat";

const ChatTemplate = ({
  msg,
  nickname,
  onSubmitMessage,
  handleKeyDown,
  setInputs,
  Message,
}: IChat): React.ReactElement => {
  return (
    <>
      <div>{Message}</div>
      <div>
        <input
          name="msg"
          value={msg}
          onChange={setInputs}
          onKeyDown={handleKeyDown}
          placeholder="Type a message here"
        />
        <button onClick={onSubmitMessage}>버튼</button>
      </div>
    </>
  );
};

export default ChatTemplate;
