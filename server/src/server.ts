import config from "./config";

import "module-alias/register"; // for absolute paths

import express from "express";

const app = express();

app.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`);
});
