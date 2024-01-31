import { ObjectId } from 'mongodb';
import { Request, Response } from "express";
import { Deposit, History, Promotions, Withdraws } from "../connections/databaseConnection";
import { DepositTypes, GameHistory } from "../data/allTypes";
import { StatusCodes } from "http-status-codes";
import { uploadImageBanner, uploadImageSquire } from './fileUploadController';

interface MonthlyDepositTypes {
    month: string,
    deposit: number,
    year: number
}
interface MonthlyRevenueTypes {
    month: string,
    revenue: number,
    year: number
}
interface CombinePromotionTypes {
    _id: string,
    title: string,
    description: string,
    image: string,
    details: string,
    bonusPercentage: number,
    turnOverAmount: number,
    applicable: boolean,
    deposit: DepositCombineTypes[]
}
interface DepositCombineTypes {
    walletId: string,
    amount: number,
    promotionId: string,
    date: Date,
    status: string,
    remarks: string,
    tranXId: string,
    userId: string,
    totalTurnover: number
}
interface FilePath {
    path: string
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const depositReport = async (req: Request, res: Response) => {
    try {
        let monthlyDeposit: MonthlyDepositTypes[] = []
        let deposit = await Deposit.find({ status: "ACCEPTED" }) as DepositTypes[]
        let subTotal = 0;
        deposit.map(s => {
            const isSame = monthlyDeposit.find(r => months[s.date.getMonth()] === r.month && s.date.getFullYear() === r.year)
            if (isSame) {
                monthlyDeposit[monthlyDeposit.indexOf(isSame)] = {
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(),
                    deposit: (isSame.deposit + s.amount)
                }
            } else {
                monthlyDeposit.push({
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(), deposit: s.amount
                })
            }
            subTotal = (subTotal + s.amount)
        })
        res.status(StatusCodes.OK).json({ monthlyDeposit, subTotal })

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const revenueReport = async (req: Request, res: Response) => {
    try {
        let monthlyHistory: MonthlyRevenueTypes[] = []
        let history = await History.find() as GameHistory[]
        let subTotal = 0;
        history.map(s => {
            const isSame = monthlyHistory.find(r => months[s.date.getMonth()] === r.month && s.date.getFullYear() === r.year)
            if (isSame) {
                monthlyHistory[monthlyHistory.indexOf(isSame)] = {
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(),
                    revenue: (isSame.revenue + s.bet) - s.win
                }
            } else {
                monthlyHistory.push({
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(), revenue: s.bet - s.win
                })
            }
            subTotal = (subTotal + s.bet) - s.win;
        })

        res.status(StatusCodes.OK).json({ monthlyHistory, subTotal })

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const depositHistory = async (req: Request, res: Response) => {
    try {

        const combineDeposit = await Deposit.aggregate([
            {
                $lookup: {
                    from: 'users',
                    let: { userIdObj: '$userId' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$username', '$$userIdObj'] }
                            }
                        }
                    ],
                    as: 'user'
                },


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
            },
            {
                $addFields: {
                    user: { $arrayElemAt: ['$user', 0] }
                }
            }

        ]).sort({ date: -1 })
        res.status(StatusCodes.OK).json(combineDeposit)

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const toggleStatusDeposit = async (req: Request, res: Response) => {
    //const { id, status } = req.params;
    const { message, id, status } = req.body
    try {
        const deposit = await Deposit.updateOne({ _id: new ObjectId(id) }, { $set: { status: status ? "ACCEPTED" : "CANCELLED", remarks: message } })
        return res.status(StatusCodes.OK).json(deposit)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: "Invalid ID" })
    }
}

export const turnOverHistory = async (req: Request, res: Response) => {
    try {

        const combinePromotions = await Promotions.aggregate([

            {
                $lookup: {
                    from: 'deposits',
                    let: { userIdObj: '$_id' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$promotionId', { $toString: '$$userIdObj' }] },
                                status: "ACCEPTED"
                            }
                        },
                        {
                            $sort: {
                                date: -1
                            }
                        },
                        {
                            $group: {
                                _id: '$userId',
                                deposit: { $first: '$$ROOT' }
                            }
                        },
                        {
                            $replaceRoot: { newRoot: '$deposit' }
                        }
                    ],
                    as: 'deposit'
                }
            },
        ]) as CombinePromotionTypes[]

        const processPromotions = async (combinePromotions: CombinePromotionTypes[]) => {
            for (const d of combinePromotions) {
                await Promise.all(d.deposit.map(async (s, i) => {
                    let totalTurnover = 0;
                    const history = await History.find({ date: { $gte: s.date } }) as GameHistory[];

                    history.forEach((h) => {
                        totalTurnover += h.bet;
                    });
                    d.deposit[i] = { ...s, totalTurnover: totalTurnover };
                }));
            }
        };

        await processPromotions(combinePromotions);

        res.status(StatusCodes.OK).json(combinePromotions)

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}

export const createPromotion = async (req: Request, res: Response) => {
    const { title, description, details, bonusPercentage, turnOverAmount } = req.body;
    if (!title || !description || !details || !bonusPercentage || !turnOverAmount) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Field are required" })
    }
    try {

        const { path } = (await uploadImageBanner(req, res)) as FilePath
        //console.log(path);

        const promotion = await Promotions.create({
            title: title,
            description: description,
            details: details,
            bonusPercentage: parseInt(bonusPercentage),
            turnOverAmount: parseInt(turnOverAmount),
            applicable: true,
            image: path
        })
        //console.log(promotion);


        res.status(StatusCodes.OK).json(promotion)

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const deletePromotion = async (req: Request, res: Response) => {
    const { promotionID } = req.params;

    try {


        const promotion = await Promotions.deleteOne({
            _id: new ObjectId(promotionID)
        })
        //console.log(promotion);


        res.status(StatusCodes.OK).json(promotion)

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const withdrawHistory = async (req: Request, res: Response) => {
    try {

        const combineWallet = await Withdraws.aggregate([
            {
                $lookup: {
                    from: 'userwallets',
                    let: { userIdObj: { $toObjectId: '$walletId' } },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$_id', '$$userIdObj'] }
                            }
                        }
                    ],
                    as: 'wallet'
                },
            },
            {
                $addFields: {
                    wallet: { $arrayElemAt: ['$wallet', 0] }
                }
            },


        ]).sort({ date: -1 })
        res.status(StatusCodes.OK).json(combineWallet)

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}