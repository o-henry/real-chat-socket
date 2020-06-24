import io from "socket.io-client";

const socket = io.connect(
  // `${process.env.REACT_APP_HEROKU_URL}` ||
  `${process.env.REACT_APP_SOCKET_URL}`
);

// config object
export const socketClient = (nickname: any, msg: any, setChat: any) => {
  function onSubmitMessage() {
    socket.emit("chat message", { nickname, msg });
  }

  function handleKeyDown(e: { key: string }) {
    if (e.key == "Enter" && msg != "") {
      onSubmitMessage();
    }
  }

  function saveMessage() {
    socket.on("chat message", () => {
      return setChat;
    });
  }

  return {
    onSubmitMessage,
    handleKeyDown,
    saveMessage,
  };
};
