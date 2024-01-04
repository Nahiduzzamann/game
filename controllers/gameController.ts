import { Response, Request } from 'express';
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';
import RootObject from '../data/gamesTypes';
import uniqueArray from '../functions/uniqueArray';
import CategoryTypes from '../data/categoryTypes';
const games:RootObject=require("../data/games.json")
const categories:CategoryTypes=require("../data/category.json")

interface Category{
    title:string,
    subCategory:Subs[]
}
interface Subs {
    name: string;
    system: string;
    image_black: string;
    image_white: string;
    image_colored: string;
    image_small_color: string;
    image_small_gray: string;
}
export const getGameCategories = (req: Request, res: Response) => {
    try {
        const data=games.response_provider_logos
        let categories:Category[]=[]
        games.response.forEach(d=>{
            
        })
        
        res.status(StatusCodes.OK).json(types.filter(uniqueArray))
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}