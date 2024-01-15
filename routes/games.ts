import express,{Express} from 'express';
import { callBack, getGameByCategory, getGameById, getGameCategories } from '../controllers/gameController';
import multer from "multer"
const upload = multer()

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
games.get("/games/:id/:user_id",getGameById)
games.post("/callback",upload.none(),callBack)
export default games