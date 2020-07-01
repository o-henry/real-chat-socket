import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "@config/index";

const expressLoader = ({ app }: { app: express.Application }) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  /* Health Check endpoints */
  app.get("/", (req, res) => {
    res.status(200).end("Good");
  });
};

export default expressLoader;
