import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "@config/index";

const expressLoader = ({ app }: { app: express.Application }) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome");
    res.status(200).end("end");
  });

  app.use(cors());
};

export default expressLoader;
