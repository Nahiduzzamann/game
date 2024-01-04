import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import games from "./routes/games";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.static(path.join(__dirname,"frontEnd/dist")));
app.use("/api",games)
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname,"frontEnd/dist/index.html"))
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});