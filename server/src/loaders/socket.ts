//@ts-nocheck
import express from "express";
import moment from "moment";
import "moment/locale/ko";

import { users, addUser, removeUser, getUser } from "../api/controllers/user";

moment.locale("ko");

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
          join: `${user.name} has Join.`,
          count: `${users.length} has Connected`,
        });
      }
    });

    /* Chat message */
    socket.on("sendMessage", (message: any) => {
      const user = getUser(socket.id);
      io.emit("message", {
        user: user.name,
        text: message,
        timestamp: moment().format("LTS"),
      });
    });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnect");
      const user = removeUser(socket.id);
      if (user) {
        io.emit("message", {
          join: `${user.name} has Left.`,
          count: `${users.length} has remained`,
        });
      }
    });

    socket.on("error", (error: any) => {
      console.log(error);
    });
  });
};

export default socketServer;
