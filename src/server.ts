import { createServer, IncomingMessage, ServerResponse } from "http";
import next from "next";
import { Server } from "socket.io";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const dev: boolean = process.env.NODE_ENV !== "production";
const hostname: string = "localhost";
const port: number = 3000;

const app = next({ dev, hostname, port });
const handler: NextApiHandler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
      handler(req as NextApiRequest, res as NextApiResponse);
    }
  );

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    // Manejar eventos de conexión aquí
    console.log("Nuevo cliente conectado");

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });

  httpServer
    .once("error", (err: Error) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
