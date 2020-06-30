//@ts-nocheck
import express from "express";
import { addUser, removeUser, getUser } from "../api/controllers/user";

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
      const { user } = addUser({ id: socket.id, name });
      socket.emit("message", { user: "admin", text: `${user.name}` });
    });

    /* Chat message */
    socket.on("sendMessage", (message: any) => {
      const user = getUser(socket.id);

      io.emit("message", { user: user.name, text: message });

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
      const user = removeUser(socket.id);
      if (user) {
        io.emit("message", {
          user: "Admin",
          text: `${user.name} has left.`,
        });
      }

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
