import express, { Express } from "express";

import { addSlider, changePasswordAgents, createPromotion, deletePromotion, deleteSlider, depositHistory, depositReport, getAllUser, getNotificationAdmin, getNotificationUser, getSlider, getUnreadNotificationCount, getUnreadNotificationCountUser, loginAgents, registerAgents, revenueReport, toggleStatusDeposit, toggleStatusWithdraw, turnOverHistory, withdrawHistory } from "../controllers/adminController";
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
admin.post("/agents/register",registerAgents)
admin.post("/agents/login",loginAgents) 
admin.post("/agents/change-password",changePasswordAgents)
admin.post("/add-slider",upload.single("image"),addSlider)
admin.delete("/delete-slider",deleteSlider)
admin.get("/get-slider", getSlider)
export default admin;
