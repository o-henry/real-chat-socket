import "module-alias/register"; // for absolute paths

import config from "./config";

import express from "express";

import io from "socket.io";

async function startServer() {
  const app = express();
  const server = require("http").Server(app);

  await require("./loaders").default({ expressApp: app });

  io(server).on("connection", (socket: any) => {
    console.log("test");
    socket.on("test", (data: any) => {
      console.log(data, "print test message");
    });
  });

  server.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
  });
}

startServer();
