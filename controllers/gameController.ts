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
import axios, { AxiosResponse } from "axios"
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
                subCategory: subs.filter(s => s)
            })
        })

        res.status(StatusCodes.OK).json(cats)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
export const getGameByCategory = (req: Request, res: Response) => {
    const gameIndex: number = Number(req.params.gameIndex);

    const system: string = String(req.params.system)
    try {


        res.status(StatusCodes.OK).json(games.response.filter(d => (d.type == categories.data[gameIndex].slag.split(",")[0] || d.type == categories.data[gameIndex].slag.split(",")[1] || d.type == categories.data[gameIndex].slag.split(",")[2]) && d.system === system))
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
export const getGameById = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    try {
        const response = await axios.post(`https://stage.game-program.com/api/seamless/provider`, {
            "api_password": "3XKBmgmYXAKpcuVyQv",
            "api_login": "40xbet_mc_s",
            "method": "getGame",
            "lang": "EN",
            "user_username": "sazzad",
            "user_password": "sazzad#991",
            "gameid": id,
            "play_for_fun": 0,
            "currency": "USD"
        })

        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}