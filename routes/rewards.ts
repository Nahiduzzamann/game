import express,{Express} from 'express';
import { callBack, getGameByCategory, getGameById, getGameCategories, getGameHistory } from '../controllers/gameController';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
const upload = multer()

const rewards=express.Router()
rewards.get("/category",getGameCategories)
export default rewards