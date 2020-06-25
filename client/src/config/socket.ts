import io from "socket.io-client";

// config object
export const socketClient = () => {
  const socket = io.connect(
    `${process.env.REACT_APP_HEROKU_URL}` ||
      `${process.env.REACT_APP_SOCKET_URL}`
  );

  function onSubmitMessage(nickname: string, msg: string) {
    socket.emit("message", { nickname, msg });
  }

  function message(nickname: any, msg: any) {
    socket.on("message", (nickname: any, msg: any) => {
      console.log(nickname, msg);
    });
  }

  function handleKeyDown(e: any, nickname: string, msg: string) {
    if (e.key == "Enter" && msg != "") {
      onSubmitMessage(nickname, msg);
    }
  }

  function disconnect() {
    socket.emit("disconnect");
  }

  function close() {
    socket.close();
  }

  return {
    onSubmitMessage,
    message,
    handleKeyDown,
    disconnect,
    close,
  };
};
