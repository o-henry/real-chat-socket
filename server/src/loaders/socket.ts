import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    const { id } = socket.client;

    console.log(`${id} 소켓 사용자 연결됨`);
    numClients++;

    // console.log("Connected clients:", numClients);

    /* Name */
    socket.on("join", async (data: any) => {
      console.log("name: ", data);
      io.emit("join", data);
    });

    /* Chat message */
    socket.on("message", async (data: any) => {
      console.log("message", data);
      io.emit("message", data);

      // const status = numClients;
      // io.emit("message", nickname, msg);
      // socket.emit("message", {
      //   nickname,
      //   msg,
      //   timestamp: Date.now(),
      // });
    });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("User disconnect");

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
