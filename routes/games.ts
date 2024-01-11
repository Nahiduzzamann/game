import express,{Express} from 'express';
import { getGameByCategory, getGameById, getGameCategories } from '../controllers/gameController';

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
games.get("/games/url/:id",getGameById)
export default games