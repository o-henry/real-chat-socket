import express from "express";

const socketServer = ({ server }: { server: express.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    const { id } = socket.client;

    console.log(`${id} 소켓 사용자 연결됨`);
    numClients++;

    // console.log("Connected clients:", numClients);

    /* Name */
    socket.on("join", (name: any) => {
      console.log("서버에서 받은 이름: ", name);
      socket.emit("join", name);
    });

    /* Chat message */
    socket.on("message", (message: any) => {
      console.log("메시지", message);
      io.emit("message", message);

      // const status = numClients;
      // io.emit("message", nickname, msg);
      // socket.emit("message", {
      //   nickname,
      //   msg,
      //   timestamp: Date.now(),
      // });
    });

    // socket.on("chat", ({ nickname, msg }: any) => {
    //   io.emit("chat", { nickname, msg });
    // });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnect");

      // numClients--;
      //   socket.broadcast.emit("blah", { numClients: numClients });
      //   console.log("disconnected clients:", numClients);
    });

    socket.on("error", (error: any) => {
      console.log(error);
    });

    // console.log(socket.client.conn.server.clientsCount + " users connected");
  });
};

export default socketServer;
