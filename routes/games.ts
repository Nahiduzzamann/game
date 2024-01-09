import express,{Express} from 'express';
import { getGameByCategory, getGameCategories } from '../controllers/gameController';

const games=express.Router()
games.get("/category",getGameCategories)
games.get("/games/:gameIndex/:system",getGameByCategory)
export default games