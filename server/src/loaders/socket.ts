import io from "socket.io";
import e from "express";

function socketServer({ server }: { server: e.Application }) {
  io(server).on("connection", (socket: any) => {
    console.log("test");
    socket.on("test", (data: any) => {
      console.log(data, "print test message");
    });
  });
}

export default socketServer;
