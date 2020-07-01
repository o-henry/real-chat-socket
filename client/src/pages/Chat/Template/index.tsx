import React from "react";
import { RenderMessage, Button, Input, Img } from "@components/index";
import { sendBtn } from "@assets/index";
import Grid from "@material-ui/core/Grid";

const ChatTemplate = ({
  name,
  message,
  handleChange,
  handleKeyPress,
  handleClick,
  allMessage,
}: any) => {
  return (
    <>
      <Grid className="chat" container>
        <Grid className="chat-layout" item xs={12}>
          <div className="chat-container">
            <RenderMessage chat={allMessage} name={name} />
          </div>
          <div className="chat-input-layout">
            <Grid className="chat-input-grid" item xs={11}>
              <Input
                style="chat-input"
                name={name}
                message={message}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
              />
            </Grid>
            <Grid className="chat-button-grid" item>
              <Button onClick={handleClick}>
                <Img style="send-btn" src={sendBtn} alt="send-btn" />
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ChatTemplate;
