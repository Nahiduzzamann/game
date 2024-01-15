import express,{Express} from 'express';
import { callBack, getGameByCategory, getGameById, getGameCategories } from '../controllers/gameController';

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
games.get("/games/:id",getGameById)
games.post("/callback",callBack)
export default games