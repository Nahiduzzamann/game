import express, { Express } from "express";

import { createPromotion, deletePromotion, depositHistory, depositReport, revenueReport, toggleStatusDeposit, turnOverHistory, withdrawHistory } from "../controllers/adminController";
import upload from "../lib/upload";

const admin = express.Router();
admin.get("/deposit/report", depositReport);
admin.get("/revenue/report", revenueReport);
admin.get("/deposit/all", depositHistory);
admin.post("/deposit/toggle", toggleStatusDeposit);
admin.get("/deposit/turnover", turnOverHistory);
admin.post("/create/promotion", upload.single("image"), createPromotion);
admin.delete("/delete/promotion/:promotionID", deletePromotion);
admin.get("/withdraw/get", withdrawHistory);
export default admin;
