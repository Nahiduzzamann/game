import express,{Express} from 'express';
import { callBack, getGameByCategory, getGameById, getGameCategories } from '../controllers/gameController';
import multer from "multer"
import { authenticateToken } from '../middlewares/checkLogin';
const upload = multer()

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
games.get("/games/:id",authenticateToken,getGameById)
games.post("/callback",upload.none(),callBack)
export default games