import dotenv from "dotenv";
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "production";

export default {
  port: process.env.PORT,

  api: {
    prefix: "/api",
  },
};
