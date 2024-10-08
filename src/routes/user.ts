import express, { Express } from "express";
import {
  getUser,
  login,
  updatePassword,
  signUp,
  updateUser,
  sendOTP,
} from "../controllers/userControler.js";
import { authenticateToken } from "../middlewares/checkLogin.js";

const user = express.Router();
user.post("/signup", signUp);
user.post("/login", login);
user.put("/updateUser", authenticateToken, updateUser);
user.put("/updatePassword", authenticateToken, updatePassword);
user.get("/getUser", authenticateToken, getUser);
user.get("/sendOTP",sendOTP)
export default user;
