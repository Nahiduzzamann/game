import { DepositTypes, GameHistory, UserTypes, PromotionTypes } from './../data/allTypes';
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { uploadImageBanner, uploadImageSquire } from "./fileUploadController";
import { Deposit, History, PromotionHistory, Promotions, UserWallets, Users, Wallets } from "../connections/databaseConnection";
import { AuthenticatedRequest } from "../middlewares/checkLogin";
import { UserWalletsTypes, WalletsTypes } from "../data/allTypes";
import { ObjectId } from "mongodb";

interface FilePath {
    path: string
}

export const createPromotions = async (req: Request, res: Response) => {
    const { title, description, details, bonusPercentage, turnOverAmount, applicable } = req.body;
    if (!title || !description || !details || !bonusPercentage || !turnOverAmount) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }
    if (!req.file) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Image require" })
    }

    try {
        const { path } = (await uploadImageBanner(req, res)) as FilePath
        const promotion = await Promotions.create({
            title: title,
            description: description,
            details: details,
            bonusPercentage: parseInt(bonusPercentage),
            image: path,
            turnOverAmount: parseInt(turnOverAmount),
            applicable: applicable ? true : false
        })
        res.status(StatusCodes.OK).json(promotion)
    } catch (error) {
        console.log(error);

        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const createWallet = async (req: Request, res: Response) => {
    const { methodName, slogan, walletNumber } = req.body;
    if (!methodName || !slogan || !walletNumber) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }
    if (!req.file) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Image require" })
    }

    try {
        const { path } = (await uploadImageSquire(req, res)) as FilePath
        const wallet = await Wallets.create({
            methodName,
            slogan,
            walletNumber,
            icon: path
        })
        res.status(StatusCodes.OK).json(wallet)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const createUserWallet = async (req: AuthenticatedRequest, res: Response) => {
    const { walletNumber, walletId } = req.body;
    const { username } = req
    if (!walletNumber || !walletId) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }

    try {
        const wallet = await UserWallets.create({
            walletNumber,
            walletId,
            userId: username
        })
        res.status(StatusCodes.OK).json(wallet)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const getUserWallets = async (req: AuthenticatedRequest, res: Response) => {
    const { username } = req
    try {
        const combinedWallets = await UserWallets.aggregate([
            {
                $match: { userId: username }
            },
            {
                $lookup: {
                    from: 'wallets',
                    let: { userIdObj: { $toObjectId: '$walletId' } },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$_id', '$$userIdObj'] }
                            }
                        }
                    ],
                    as: 'wallet'
                }
            },
            {
                $addFields: {
                    wallet: { $arrayElemAt: ['$wallet', 0] }
                }
            }

        ])

        // console.log(combinedWallets);
        res.status(StatusCodes.OK).json(combinedWallets);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const deleteUserWallets = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    try {
        const combinedWallets = await UserWallets.deleteOne({ _id: new ObjectId(id) })

        // console.log(combinedWallets);
        res.status(StatusCodes.OK).json(combinedWallets);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const getWallets = async (req: Request, res: Response) => {
    try {
        const wallet = await Wallets.find()
        res.status(StatusCodes.OK).json(wallet)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}

export const getPromotions = async (req: Request, res: Response) => {
    const { applicable } = req.query;

    try {
        if (applicable) {
            const promotions = await Promotions.find({ applicable: applicable ? true : null })
            res.status(StatusCodes.OK).json(promotions)
        } else {
            const promotions = await Promotions.find()
            res.status(StatusCodes.OK).json(promotions)
        }

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}

export const makeDeposit = async (req: AuthenticatedRequest, res: Response) => {
    const { walletId, amount, promotionId, tranXId } = req.body;
    const { username } = req
    if (!walletId || !amount || !tranXId) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }
    try {
        if (promotionId) {
            await PromotionHistory.create({
                promotionId,
                userId: username
            })
        }
        const deposit = await Deposit.create({
            walletId,
            amount: parseInt(amount),
            promotionId,
            tranXId,
            userId: username
        })
        res.status(StatusCodes.OK).json(deposit)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const getDeposit = async (req: AuthenticatedRequest, res: Response) => {
    const { username } = req

    try {

        const deposit = await Deposit.find({
            userId: username
        }).sort({ date: -1 })
        res.status(StatusCodes.OK).json(deposit)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error })
    }
}
export const createWithdraw = async (req: AuthenticatedRequest, res: Response) => {
    const { amount, walletId } = req.body;
    const username = req.username;
    if (!amount || !walletId) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }

    try {

        let balance = 500;
        const deposit = await Deposit.find({ userId: username, status: "ACCEPTED" }).sort({ date: -1 }) as DepositTypes[];

        if (deposit.length === 0) {
            // Handle the case when there is no deposit for the user
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "No deposit found" });
        }
        const promotion = deposit[0].promotionId != "undefined" && deposit[0].promotionId ? await Promotions.findOne({ _id: new ObjectId(deposit[0].promotionId) }) as PromotionTypes : null;

        const user = await Users.findOne({ username: username }) as UserTypes
        if (promotion) {
            const gameHistory = await History.find({ date: { $gte: deposit[0].date } }) as GameHistory[]
            let turnOverAmount = 0;
            gameHistory.map(d => {
                turnOverAmount = turnOverAmount + d.bet;
            })
            if (turnOverAmount < promotion.turnOverAmount) {
                res.status(StatusCodes.BAD_REQUEST).json({ error: "Please complete your turnover amount" })
                return
            }
        }
        if (parseInt(amount) < balance) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "You can only cash out over 500 BDT" })
        }
        if (user.balance < parseInt(amount)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Low balance to cash out" })

        }
        


        const d = await Deposit.create({
            walletId,
            amount,
            userId: username
        })
        const decreaseAmountBy = parseInt(amount);

        user.balance = user.balance - decreaseAmountBy;
        user.save();
        res.status(StatusCodes.OK).json(d)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
}