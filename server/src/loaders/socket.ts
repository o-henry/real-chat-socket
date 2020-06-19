import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);
  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    socket.on("chat message", (nickname: string, msg: string) => {
      io.emit("chat message", nickname, msg);
    });
  });
};

export default socketServer;
