import express,{Express} from 'express';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
import { createPromotions, createUserWallet, createWallet, createWithdraw, deleteUserWallets, getBonus, getDeposit, getPromotions, getTurnOvers, getUserWallets, getWallets, getWithdrawHistory, makeDeposit, updateUserWallet, updateWallet } from '../controllers/balanceContoller';
const upload = multer()

const balance=express.Router()
balance.post("/promotion/add",[authenticateToken,upload.single("image")],createPromotions)
balance.get("/promotion/get",getPromotions)
balance.post("/wallet/add",upload.single("icon"),createWallet)
balance.put("/wallet/update",upload.single("icon"),updateWallet)
balance.get("/wallet/get",getWallets)
balance.post("/deposit",authenticateToken,makeDeposit)
balance.get("/deposit/get",authenticateToken,getDeposit)
balance.get("/user/wallet/get",authenticateToken,getUserWallets)
balance.delete("/user/wallet/delete/:id",authenticateToken,deleteUserWallets)
balance.post("/user/wallet/create",authenticateToken,createUserWallet)
balance.put("/user/wallet/update",authenticateToken,updateUserWallet)
balance.post("/withdraw",authenticateToken,createWithdraw)
balance.get("/withdraw-history",authenticateToken,getWithdrawHistory)
balance.get("/turnover/history",authenticateToken,getTurnOvers)
balance.get("/turnover/bonus",authenticateToken,getBonus)
export default balance