import React from "react";
import { IChat } from "@interface/chat";

const ChatTemplate = ({ Message }: IChat): React.ReactElement => {
  return (
    <>
      <div>{Message}</div>
    </>
  );
};

export default ChatTemplate;
