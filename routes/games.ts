import express,{Express} from 'express';
import { getGameCategories } from '../controllers/gameController';

const games=express.Router()
games.get("/category",getGameCategories)
export default games