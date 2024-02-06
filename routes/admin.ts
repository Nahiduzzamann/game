import express, { Express } from "express";

import { createPromotion, deletePromotion, depositHistory, depositReport, getAllUser, getNotificationAdmin, getNotificationUser, getUnreadNotificationCount, getUnreadNotificationCountUser, revenueReport, toggleStatusDeposit, toggleStatusWithdraw, turnOverHistory, withdrawHistory } from "../controllers/adminController";
import upload from "../lib/upload";
import { authenticateToken } from "../middlewares/checkLogin";

const admin = express.Router();
admin.get("/deposit/report", depositReport);
admin.get("/revenue/report", revenueReport);
admin.get("/deposit/all", depositHistory);
admin.post("/deposit/toggle", toggleStatusDeposit);
admin.get("/deposit/turnover", turnOverHistory);
admin.post("/create/promotion", upload.single("image"), createPromotion);
admin.delete("/delete/promotion/:promotionID", deletePromotion);
admin.get("/withdraw/get", withdrawHistory);
admin.post("/withdraw/toggle", toggleStatusWithdraw);

admin.get("/message/user/get",authenticateToken, getNotificationUser);
admin.get("/message/user/count",authenticateToken, getUnreadNotificationCountUser);
admin.get("/message/get", getNotificationAdmin);
admin.get("/message/count", getUnreadNotificationCount);
admin.get("/users", getAllUser);
export default admin;
