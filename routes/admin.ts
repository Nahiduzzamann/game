import express, { Express } from "express";
import {
  getUser,
  login,
  updatePassword,
  signUp,
  updateUser,
} from "../controllers/userControler";
import { authenticateToken } from "../middlewares/checkLogin";

const admin = express.Router();
admin.post("/signup", signUp);
admin.post("/login", login);
admin.put("/updateUser", authenticateToken, updateUser);
admin.put("/updatePassword", authenticateToken, updatePassword);
admin.get("/getUser", authenticateToken, getUser);
export default admin;
