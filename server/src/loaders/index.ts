import expressLoader from "./express";
import socketServer from "./socket";

export default async ({ expressApp, socketApp }: any) => {
  await expressLoader({ app: expressApp });

  await socketServer({ server: socketApp });
};
