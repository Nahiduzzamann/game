import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { uploadImageBanner, uploadImageSquire } from "./fileUploadController";
import { Deposit, PromotionHistory, Promotions, Wallets } from "../connections/databaseConnection";
import { AuthenticatedRequest } from "../middlewares/checkLogin";
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
        if(promotionId){
            await PromotionHistory.create({
                promotionId,
                userId:username
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

