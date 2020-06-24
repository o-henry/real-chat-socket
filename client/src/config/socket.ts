import io from "socket.io-client";

export const socket = io.connect(
  // `${process.env.REACT_APP_HEROKU_URL}` ||
  `${process.env.REACT_APP_SOCKET_URL}`
);

// config object
export const socketClient = (nickname: any, msg: any) => {
  function onSubmitMessage() {
    socket.emit("chat message", { nickname, msg });
  }

  function handleKeyDown(e: { key: string }) {
    if (e.key == "Enter" && msg != "") {
      onSubmitMessage();
    }
  }

  return {
    onSubmitMessage,
    handleKeyDown,
  };
};
