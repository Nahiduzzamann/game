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
import { Games } from '../connections/databaseConnection';
import { GameTypes, Providers } from '../data/gameDataTypes';
const providers: Providers[] = require("../data/providers.json")
const categories: CategoryTypes = require("../data/category.json")
const url = "http://localhost:3100"
interface Async {
    (source: string): Promise<string>;
}
interface Category {
    title: string,
    subCategory: Providers[]
}

export const getGameCategories = async (req: Request, res: Response) => {
    try {
        const games = (await Games.find()) as GameTypes
        const gameList = games[0].content.gameList;
        let arr: Category[] = [];
        categories.map(cat => {
            let sub: Providers[] = []
            let gameTitle: string[] = []
            gameList.map(d => {
                if (d.categories.match(cat.slag)) {
                    gameTitle.push(d.title)
                }
            })


            gameTitle.filter(uniqueArray).map(title => {
                const doc = providers.filter(d => d.slag.match(title))[0]
                //console.log(title);
                sub.push(doc)
            })
            arr.push({
                title: cat.title,
                subCategory: sub
            })
        })

        res.status(StatusCodes.OK).json(arr)
    } catch (error) {
        console.error(error);

        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
export const getGameByCategory = async (req: Request, res: Response) => {
    const gameIndex: number = Number(req.params.gameIndex);

    const system: string = String(req.params.system)
    try {

        const games = (await Games.find()) as GameTypes
        const gameList = games[0].content.gameList;
        res.status(StatusCodes.OK).json(gameList.filter(d => (d.categories == categories[gameIndex].slag && d.title === system)))
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
// export const getGameById =  (req: Request, res: Response) => {
//     return res.status(StatusCodes.OK).json({})
//     //const id: number = Number(req.params.id);
//     try {
//         // const response = await axios.post(`https://stage.game-program.com/api/seamless/provider`, {
//         //     "api_password": "3XKBmgmYXAKpcuVyQv",
//         //     "api_login": "40xbet_mc_s",
//         //     "method": "getGame",
//         //     "lang": "EN",
//         //     "user_username": "sazzad",
//         //     "user_password": "sazzad#991",
//         //     "gameid": id,
//         //     "play_for_fun": 0,
//         //     "currency": "USD"
//         // })

//         res.status(StatusCodes.OK).json({})
//     } catch (error) {
//         res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
//     }
// }
export const getGameById = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    try {
        const response: AxiosResponse = await axios.post(`http://tbs2api.aslot.net/API/openGame/`, {
            "cmd": "openGame",
            "hall": "3202296",
            "domain": "https://40xbet.com",
            "exitUrl": "https://40xbet.com",
            "language": "en",
            "key": "sazzad#991",
            "login": "sazzad9911",
            "gameId": id,
            "cdnUrl": "",
            "demo": "0"
        }
        )

        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
export const callBack=async(req:Request, res:Response)=>{
    return res.send(200).json(req.body)
}