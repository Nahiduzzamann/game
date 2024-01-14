import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import games from "./routes/games";
import { mongoConnection } from "./connections/databaseConnection";
import user from "./routes/user";
import bodyParser from 'body-parser';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
console.log();
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "frontEnd/dist")));
app.use("/api", games)
app.use("/api/icons",express.static(path.join(__dirname, "data/icons")))
app.use("/api/images",express.static(path.join(__dirname, "data/images")))
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "frontEnd/dist/index.html"))
});

mongoConnection().then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error(err.message);

})


//user 
app.use("/user", user)
