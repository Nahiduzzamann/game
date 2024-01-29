import express,{Express} from 'express';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
import { createPromotions, createUserWallet, createWallet, deleteUserWallets, getDeposit, getPromotions, getUserWallets, getWallets, makeDeposit } from '../controllers/balanceContoller';
const upload = multer()

const balance=express.Router()
balance.post("/promotion/add",[authenticateToken,upload.single("image")],createPromotions)
balance.get("/promotion/get",getPromotions)
balance.post("/wallet/add",[authenticateToken,upload.single("icon")],createWallet)
balance.get("/wallet/get",getWallets)
balance.post("/deposit",authenticateToken,makeDeposit)
balance.get("/deposit/get",authenticateToken,getDeposit)
balance.get("/user/wallet/get",authenticateToken,getUserWallets)
balance.delete("/user/wallet/delete/:id",authenticateToken,deleteUserWallets)
balance.post("/user/wallet/create",authenticateToken,createUserWallet)
export default balance