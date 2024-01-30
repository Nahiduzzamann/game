import express, { Express } from "express";

import { authenticateToken } from "../middlewares/checkLogin";
import { depositReport, revenueReport } from "../controllers/adminController";

const admin = express.Router();
admin.get("/deposit/report", depositReport);
admin.get("/revenue/report", revenueReport);

export default admin;
