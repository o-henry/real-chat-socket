import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);
  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    socket.on("chat message", (nickname: string, msg: string) => {
      io.emit("chat message", nickname, msg);
    });
    socket.on("disconnect", function () {
      var connectionMessage = "Disconnected 1 User";
      console.log(connectionMessage);
    });

    console.log(socket.client.conn.server.clientsCount + " users connected");
  });

  // io.clients((error: any, clients: any) => {
  //   if (error) throw error;
  //   console.log("client", clients);
  // });

  // console.log("counts:", io.sockets.sockets.length);
};

export default socketServer;
