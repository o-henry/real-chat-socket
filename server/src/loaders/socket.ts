import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    console.log("소켓 사용자 연결됨");
    numClients++;

    // console.log("Connected clients:", numClients);

    /* Chat message */
    socket.on("message", ({ nickname, msg }: any) => {
      console.log("message", nickname, msg);

      const status = numClients;
      // io.emit("message", nickname, msg);
      socket.emit("message", {
        nickname,
        msg,
        timestamp: Date.now(),
      });
    });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnect");
      // numClients--;
      //   socket.broadcast.emit("blah", { numClients: numClients });
      //   console.log("disconnected clients:", numClients);
    });

    // console.log(socket.client.conn.server.clientsCount + " users connected");
  });
};

export default socketServer;
