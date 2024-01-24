import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import games from "./routes/games";
import { mongoConnection } from "./connections/databaseConnection";
import user from "./routes/user";
import bodyParser from 'body-parser';
import balance from "./routes/balance";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


//app.use(express.urlencoded());
//app.use(express.json());

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "frontEnd/dist")));
app.use(express.static(path.join(__dirname, "dashboard/dist")));
app.use("/api", games)
app.use("/api/balance",balance)
app.use("/api/icons",express.static(path.join(__dirname, "data/icons")))
app.use("/api/images",express.static(path.join(__dirname, "data/images")))
app.use("/api/data/images",express.static(path.join(__dirname, "data/images")))
app.get("/deployment", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "deployment.php"))
});
//user 
app.use("/api/user", user)
app.get("/dashboard", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "dashboard/dist/index.html"))
});
app.get("/auth", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "dashboard/dist/index.html"))
});
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



