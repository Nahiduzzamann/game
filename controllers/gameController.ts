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
const games: RootObject = require("../data/games.json")
const categories: CategoryTypes = require("../data/category.json")

interface Category {
    title: string,
    subCategory: Subs[]
}
interface Subs {
    name: string;
    system: string;
    image_black?: string;
    image_white?: string;
    image_colored?: string;
    image_small_color?: string;
    image_small_gray?: string;
}
export const getGameCategories = (req: Request, res: Response) => {
    try {
        const data = games.response_provider_logos
        let cats: Category[] = []
        categories.data.map(d => {
            let lists: string[] = []
            let slug: string[] = d.slag.split(",")
            slug.map(s => {
                games.response.map(g => {
                    if (g.type === s) {
                        lists.push(g.system)
                    }
                })
            })
            //console.log(lists.filter(uniqueArray));
            let subs: Subs[] = []
            lists.filter(uniqueArray).map(system => {
                subs.push(
                    data.livecasino.filter(s => s.system === system)[0] || data.casino.filter(s => s.system === system)[0] || data.sportsbook.filter(s => s.system === system)[0]
                )
            })
            cats.push({
                title: d.title,
                subCategory: subs.filter(s=>s)
            })
        })

        res.status(StatusCodes.OK).json(cats)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}