import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import games from "./routes/games.js";
import { mongoConnection } from "./connections/databaseConnection.js";
import user from "./routes/user.js";
import bodyParser from 'body-parser';
import balance from "./routes/balance.js";
import admin from "./routes/admin.js";
import rewards from "./routes/rewards.js";
import { Server as SocketIOServer, Socket } from 'socket.io';
import http from 'http';
import { fileURLToPath } from 'url';
import {
  getNotificationSocketAdmin, getNotificationUserSocket,
  getUnreadNotificationCountSocket, getUnreadNotificationCountUserSocket
} from "./functions/sendNotification.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
export const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "PUT"],
  },
});
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log(userId)
})
io.on("userCount", async (username) => {
  const data = await getUnreadNotificationCountUserSocket(username)
  io.emit("userCount", data)
})
io.on("adminCount", async (username) => {
  const data = await getUnreadNotificationCountSocket()
  io.emit("adminCount", data)
})
io.on("userAll", async (username) => {
  const data = await getNotificationUserSocket(username)
  io.emit("userAll", data)
})
io.on("adminAll", async (username) => {
  const data = await getNotificationSocketAdmin()
  io.emit("adminAll", data)
})

//app.use(express.urlencoded());
//app.use(express.json());

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/wallets", express.static(path.join(__dirname, "../data/wallets")))
app.use(express.static(path.join(__dirname, "../frontEnd/dist")));
app.use(express.static(path.join(__dirname, "../dashboard/dist")));
app.use("/api", games)
app.use("/api/balance", balance)
app.use("/api/admin", admin)
app.use("/api/rewards", rewards)
app.use("/api/icons", express.static(path.join(__dirname, "../data/icons")))
app.use("/api/images", express.static(path.join(__dirname, "../data/images")))
app.use("/api/data/images", express.static(path.join(__dirname, "../data/images")))


//user 
app.use("/api/user", user)
app.get("/dashboard/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../dashboard/dist/index.html"))
});
app.get("/auth/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../dashboard/dist/index.html"))
});
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../frontEnd/dist/index.html"))
});



mongoConnection().then(() => {
  server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error(err.message);

})
export default app
