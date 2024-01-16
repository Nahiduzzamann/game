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
import { Games, History, Users } from '../connections/databaseConnection';
import { GameTypes, Providers } from '../data/gameDataTypes';
import { AuthenticatedRequest } from '../middlewares/checkLogin';
import { UserModel } from '../data/allTypes';
import randomNumber from '../functions/randomNumber';
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
export const getGameById = async (req: AuthenticatedRequest, res: Response) => {
    const id: number = Number(req.params.id);
    const userId = req.username;
    try {
        const response: AxiosResponse = await axios.post(`http://tbs2api.aslot.net/API/openGame/`, {
            "cmd": "openGame",
            "hall": "3202296",
            "domain": "https://40xbet.com",
            "exitUrl": "https://40xbet.com",
            "language": "en",
            "key": "sazzad#991",
            "login": userId,
            "gameId": id,
            "cdnUrl": "https://40xbet.com",
            "demo": "0"
        }
        )

        res.status(StatusCodes.OK).json(response.data)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}
export const callBack = async (req: Request, res: Response) => {
    const { cmd } = req.body;

    if (!cmd) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            "status": "fail",
            "error": "ERROR CODE"
        })
    }
    if (cmd.match("writeBet")) {
        writeBet(req, res)
    } else if (cmd.match("getBalance")) {
        getBalance(req, res)
    } else {
        res.status(StatusCodes.BAD_GATEWAY).json({
            "status": "fail",
            "error": "ERROR CODE"
        })
    }

}
const writeBet = async (req: Request, res: Response) => {
    const { login, sessionId, bet, win, tradeId, gameId, betInfo } = req.body
    //return res.status(StatusCodes.OK).json({bet,win,tradeId,gameId,betInfo})
    
    if (!login || !sessionId || !bet || !win || !tradeId || !gameId || !betInfo) {
        
        return res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "MISSING"
        })
       
        
    }
    try {
        const user = (await Users.findOne({ username: login })) as UserModel
        
        if (user.balance < parseInt(bet)) {
            return res.status(StatusCodes.OK).json({
                "status": "fail",
                "error": "fail_balance"
            })
        }
        const id = randomNumber()
        const history = await History.create({
            sessionId: sessionId,
            bet: parseFloat(bet).toFixed(2),
            win: parseFloat(win).toFixed(2),
            tradeId: tradeId,
            username: login,
            gameId: gameId,
            id: id
        })
        const balance = (user.balance - parseFloat(bet)) + parseFloat(win)
        console.log(balance);
        
        const updateUser = await Users.updateOne({ username: login }, {
            balance: balance.toFixed(2)
        })
        res.status(StatusCodes.OK).json({
            "status": "success",
            "error": "",
            "login": login,
            "balance": balance.toFixed(2).toString(),
            "currency": "BDT",
            "operationId": id.toString()
        })

    } catch (error) {
        //console.log(error);
        res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        })
    }
}
const getBalance = async (req: Request, res: Response) => {
    const { login } = req.body;
    if (!login) {
        return res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        })
    }
    try {
        const user = (await Users.findOne({ username: login })) as UserModel
        res.status(StatusCodes.OK).json({
            status: "success",
            error: "",
            login: user.username,
            balance: (user.balance.toFixed(2)).toString(),
            currency: "BDT"
        })
    } catch (error) {
        res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        })
    }

}