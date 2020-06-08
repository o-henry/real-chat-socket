import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);
  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    const { id } = socket.client;
    console.log(id);

    socket.on("chat message", (msg: string) => {
      io.emit("chat message", msg);
    });
  });
};

export default socketServer;
