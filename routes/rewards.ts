import express,{Express} from 'express';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
import { addVoucher, applyVoucher, getVoucher } from '../controllers/rewardsController';
const upload = multer()

const rewards=express.Router()
rewards.get("/voucher/get",getVoucher)
rewards.post("/voucher/create",addVoucher)
rewards.get("/voucher/apply/:code",applyVoucher)
export default rewards