import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    socket.on("status", (numClient: any) => {
      numClients++;
      socket.emit("status", { numClient: numClient });
      socket.broadcast.emit("status", {
        numClient: numClients,
      });
    });

    console.log("Connected clients:", numClients);

    socket.on("disconnect", () => {
      numClients--;
      socket.broadcast.emit("blah", { numClients: numClients });
      console.log("disconnected clients:", numClients);
    });

    socket.on("chat message", (nickname: string, msg: string) => {
      io.emit("chat message", nickname, msg);
    });

    console.log(socket.client.conn.server.clientsCount + " users connected");
  });
};

export default socketServer;
