//@ts-nocheck
import express from "express";
import { users, addUser, removeUser, getUser } from "../api/controllers/user";

const socketServer = ({ server }: { server: express.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    const { id } = socket.client;

    console.log(`${id} 소켓 사용자 연결됨`);
    numClients++;

    /* Name */
    socket.on("join", (name: any) => {
      const { user } = addUser({ id: socket.id, name });
      if (user) {
        io.emit("message", {
          text: `${user.name} has Join.`,
          text: `${users.length} has connected`,
        });
      }
    });

    /* Chat message */
    socket.on("sendMessage", (message: any) => {
      const user = getUser(socket.id);
      io.emit("message", {
        user: user.name,
        text: message,
        timestamp: Date.now(),
      });
    });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnect");
      const user = removeUser(socket.id);
      if (user) {
        io.emit("message", {
          text: `${user.name} has left.`,
          text: `${users.length} has left`,
        });
      }
    });

    socket.on("error", (error: any) => {
      console.log(error);
    });
  });
};

export default socketServer;
