import express, { Express } from "express";

import { authenticateToken } from "../middlewares/checkLogin";
import { depositHistory, depositReport, revenueReport, toggleStatusDeposit } from "../controllers/adminController";

const admin = express.Router();
admin.get("/deposit/report", depositReport);
admin.get("/revenue/report", revenueReport);
admin.get("/deposit/all", depositHistory);
admin.post("/deposit/toggle", toggleStatusDeposit);

export default admin;
