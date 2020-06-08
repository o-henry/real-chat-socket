import "module-alias/register"; // for absolute paths

import config from "./config";

import express from "express";

import io from "socket.io";

async function startServer() {
  const app = express();
  const server = require("http").Server(app);

  await require("./loaders").default({ expressApp: app, socektApp: server });

  server.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
  });
}

startServer();
