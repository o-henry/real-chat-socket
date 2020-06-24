import e from "express";

const socketServer = ({ server }: { server: e.Application }) => {
  const io = require("socket.io")(server);

  let numClients = 0;

  io.set("origins", "*:*");

  io.on("connection", (socket: any) => {
    console.log("사용자 연결됨");

    // io.emit("status", (numClient: any) => {
    //   numClients++;
    // });

    // console.log("Connected clients:", numClients);

    /* Chat message */
    socket.on("chat message", (nickname: string, msg: string) => {
      console.log("message", msg);
      io.emit("chat message", nickname, msg);
    });

    /* disconnect */
    socket.on("disconnect", () => {
      console.log("user disconnect");
      // numClients--;
      //   socket.broadcast.emit("blah", { numClients: numClients });
      //   console.log("disconnected clients:", numClients);
    });

    // console.log(socket.client.conn.server.clientsCount + " users connected");
  });
};

export default socketServer;
