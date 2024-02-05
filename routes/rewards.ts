import express,{Express} from 'express';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
import { addRewards, addVoucher, applyVoucher, collectRewards, deleteRewards, getRewards, getRewardsHistory, getUserRewards, getVoucher } from '../controllers/rewardsController';
const upload = multer()

const rewards=express.Router()
rewards.get("/voucher/get",getVoucher)
rewards.post("/voucher/create",addVoucher)
rewards.get("/voucher/apply/:code",authenticateToken,applyVoucher)
rewards.get("/rewards/get",getRewards)
rewards.post("/rewards/create",addRewards)
rewards.delete("/rewards/delete/:id",deleteRewards)
rewards.get("/rewards/user/get",authenticateToken,getUserRewards)
rewards.get("/rewards/user/collect/:id",authenticateToken,collectRewards)
rewards.get("/rewards/user/history",authenticateToken,getRewardsHistory)
export default rewards