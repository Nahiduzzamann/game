import express,{Express} from 'express';
import { callBack, getGameByCategory, getGameById, getGameCategories, getGameHistory } from '../controllers/gameController.js';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin.js';
const upload = multer()

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
games.get("/games/:id",authenticateToken,getGameById)
games.post("/callback",upload.none(),callBack)
games.get("/history/:id",authenticateToken,getGameHistory)
export default games