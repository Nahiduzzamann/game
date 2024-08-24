import { StatusCodes, } from 'http-status-codes';
import uniqueArray from '../functions/uniqueArray.js';
import axios from "axios";
import { Games, History, Users } from '../connections/databaseConnection.js';
import randomNumber from '../functions/randomNumber.js';
import { ObjectId } from 'mongodb';
// const providers: Providers[] = require("../../data/providers.json")
// const categories: CategoryTypes = require("../../data/category.json")
// const sports: Welcome10[] = require("../../data/gg.json")
import providers from "../data/providers.json" assert { type: "json" };
import categories from "../data/category.json" assert { type: "json" };
import sports from "../data/gg.json" assert { type: "json" };
const typedProviders = providers;
const typedCategories = categories;
export const getGameCategories = async (req, res) => {
    try {
        const games = (await Games.find());
        const date = new Date();
        var yesterday = new Date(date.getTime());
        yesterday.setDate(date.getDate() - 1);
        if (new Date(games?.[0]?.dateTime) < yesterday) {
            console.log("Updated game list");
            const response = await axios.post(`http://tbs2api.aslot.net/API/`, {
                "cmd": "gamesList",
                "hall": "3202296",
                "key": "sazzad#991",
            });
            await Games.updateOne({ _id: new ObjectId(games[0]._id) }, response.data);
        }
        if (games?.length === 0) {
            console.log("Added game list");
            const response = await axios.post(`http://tbs2api.aslot.net/API/`, {
                "cmd": "gamesList",
                "hall": "3202296",
                "key": "sazzad#991",
            });
            await Games.create(response.data);
        }
        const gameList = games[0].content.gameList;
        let arr = [];
        categories.map((cat, i) => {
            let sub = [];
            let gameTitle = [];
            gameList.map(d => {
                if (d.categories === cat.slag) {
                    gameTitle.push(d.title);
                }
            });
            gameTitle.filter(uniqueArray).map(title => {
                const doc = providers.filter(d => d.slag === title)[0];
                //console.log(title);
                sub.push(doc);
            });
            if (i === 0) {
                arr.push({
                    title: cat.title,
                    subCategory: providers.filter(s => s.slag.match(cat.slag)),
                    bn: cat.bn
                });
            }
            else {
                arr.push({
                    title: cat.title,
                    subCategory: sub.filter(v => v != null),
                    bn: cat.bn
                });
            }
        });
        res.status(StatusCodes.OK).json(arr);
    }
    catch (error) {
        console.error(error);
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
};
export const getGameByCategory = async (req, res) => {
    const gameIndex = Number(req.params.gameIndex);
    const system = String(req.params.system);
    try {
        if (gameIndex === 0) {
            return res.status(StatusCodes.OK).json(sports.filter(d => d.system == system));
        }
        const games = (await Games.find());
        const gameList = games[0].content.gameList;
        res.status(StatusCodes.OK).json(gameList.filter(d => ((d.categories == categories[gameIndex].slag || d.categories == "") && d.title === system)));
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
};
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
export const getGameById = async (req, res) => {
    const id = Number(req.params.id);
    const userId = req.username;
    try {
        const response = await axios.post(`http://tbs2api.aslot.net/API/openGame/`, {
            "cmd": "openGame",
            "hall": "3202296",
            "domain": "https://40xbet.com",
            "exitUrl": "https://40xbet.com",
            "language": "en",
            "key": "sazzad#991",
            "login": userId,
            "gameId": id,
            "cdnUrl": "",
            "demo": "0"
        });
        res.status(StatusCodes.OK).json(response.data);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
};
export const callBack = async (req, res) => {
    const { cmd } = req.body;
    if (!cmd) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            "status": "fail",
            "error": "ERROR CODE"
        });
    }
    if (cmd.match("writeBet")) {
        writeBet(req, res);
    }
    else if (cmd.match("getBalance")) {
        getBalance(req, res);
    }
    else {
        res.status(StatusCodes.BAD_GATEWAY).json({
            "status": "fail",
            "error": "ERROR CODE"
        });
    }
};
const writeBet = async (req, res) => {
    const { login, sessionId, bet, win, tradeId, gameId, betInfo } = req.body;
    //return res.status(StatusCodes.OK).json({bet,win,tradeId,gameId,betInfo})
    if (!login || !bet || !win || !gameId) {
        return res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "MISSING"
        });
    }
    try {
        const user = (await Users.findOne({ username: login }));
        if (user.balance < parseInt(bet)) {
            return res.status(StatusCodes.OK).json({
                "status": "fail",
                "error": "fail_balance"
            });
        }
        const id = randomNumber();
        const history = await History.create({
            bet: parseFloat(bet).toFixed(2),
            win: parseFloat(win).toFixed(2),
            username: login,
            gameId: gameId,
            id: id
        });
        const balance = (user.balance - parseFloat(bet)) + parseFloat(win);
        //console.log(balance);
        const updateUser = await Users.updateOne({ username: login }, {
            balance: balance.toFixed(2)
        });
        res.status(StatusCodes.OK).json({
            "status": "success",
            "error": "",
            "login": login,
            "balance": balance.toFixed(2).toString(),
            "currency": "BDT",
            "operationId": id.toString()
        });
    }
    catch (error) {
        //console.log(error);
        res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        });
    }
};
const getBalance = async (req, res) => {
    const { login } = req.body;
    if (!login) {
        return res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        });
    }
    try {
        const user = (await Users.findOne({ username: login }));
        res.status(StatusCodes.OK).json({
            status: "success",
            error: "",
            login: user.username,
            balance: (user.balance.toFixed(2)).toString(),
            currency: "BDT"
        });
    }
    catch (error) {
        res.status(StatusCodes.OK).json({
            "status": "fail",
            "error": "user_not_found"
        });
    }
};
export const getGameHistory = async (req, res) => {
    const id = Number(req.params.id);
    const userId = req.username;
    try {
        const games = (await Games.find());
        const gameList = games[0].content.gameList;
        const allGames = gameList.filter(d => (d.categories == categories[id].slag));
        const history = await History.find({ username: userId });
        let arr = [];
        history.map(d => {
            const game = allGames.find(s => s.id == d.gameId);
            if (game) {
                return arr.push({ ...d, game: game });
            }
        });
        res.status(StatusCodes.OK).json(arr.reverse());
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
