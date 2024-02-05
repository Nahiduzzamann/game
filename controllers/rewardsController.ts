import { Request, Response } from 'express';
import { BonusHistory, History, Rewards, RewardsHistory, Users, Voucher } from '../connections/databaseConnection';
import { AuthenticatedRequest } from '../middlewares/checkLogin';
import { StatusCodes } from 'http-status-codes';
import { ObjectId } from 'mongodb';
import { GameHistory } from '../data/allTypes';
import { DATATYPES, sendNotificationToAdmin } from '../functions/sendNotification';
const jwt = require('jsonwebtoken');

interface RewardsTypes {
    level: string,
    targetTurnover: number,
    bonusAmount: number,
    date: Date,
    collected: Boolean,
    _id: string
}

export const getVoucher = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const voucher = await Voucher.find()
        res.status(StatusCodes.OK).json(voucher.reverse());
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};

export const addVoucher = async (req: AuthenticatedRequest, res: Response) => {
    const { bonusAmount, code } = req.body;
    if (!bonusAmount || !code) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are missing" })
    }
    try {
        const voucher = await Voucher.create({
            bonusAmount: parseInt(bonusAmount),
            code,
        })
        res.status(StatusCodes.OK).json(voucher)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};

export const applyVoucher = async (req: AuthenticatedRequest, res: Response) => {
    const username = req.username;
    const { code } = req.params;
    try {
        const voucher = await Voucher.findOne({ code: code })
        if (!voucher) {
            return res.status(400).json({ error: "Invalid code" })
        }
        if (voucher.applied) {
            return res.status(400).json({ error: "Code already used" })
        }
        if (!username) {
            return res.status(400).json({ error: "Invalid userID" })
        }
        await sendNotificationToAdmin("Get Voucher!!", `${username} has get a voucher ${voucher.code} and get amount ${voucher.bonusAmount}`, username, DATATYPES[2])

        const user = await Users.findOne({ username: username })
        if (user && voucher.bonusAmount) {
            user.balance = user.balance + voucher.bonusAmount;
            user.save()
            await BonusHistory.create({
                amount: voucher.bonusAmount,
                userId: username,
                promotionId: ""
            })
            const updatedVoucher = await Voucher.updateOne({
                code: code
            }, {
                applied: true,
                userId: username
            })
            return res.status(StatusCodes.OK).json(updatedVoucher)
        }

        res.status(StatusCodes.BAD_GATEWAY).json({ error: "Something went wrong" })


    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};

export const getRewards = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const rewards = await Rewards.find().sort({ date: -1 })
        res.status(StatusCodes.OK).json(rewards)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};
export const addRewards = async (req: AuthenticatedRequest, res: Response) => {
    const { bonusAmount, level, targetTurnover } = req.body;
    if (!bonusAmount || !level || !targetTurnover) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Parameter are required" })
    }
    try {
        const rewards = await Rewards.create({
            bonusAmount,
            level,
            targetTurnover
        })
        res.status(StatusCodes.OK).json(rewards)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)

    }
};
export const deleteRewards = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    try {
        const rewards = await Rewards.deleteOne({ _id: new ObjectId(id) })
        res.status(StatusCodes.OK).json(rewards)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};
export const getUserRewards = async (req: AuthenticatedRequest, res: Response) => {
    const username = req.username;
    try {
        const history = await History.find({ username: username }) as GameHistory[]
        let totalBet = 0;
        history.map(d => {
            totalBet = totalBet + d.bet;
        })
        //console.log(totalBet)
        const rewards = await Rewards.aggregate([
            {
                $lookup: {
                    from: 'rewardshistories',
                    let: { userIdObj: '$_id' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$rewardId', { $toString: '$$userIdObj' }] },
                                userId: username
                                //$expr:  { $eq: ['$userId', username] }

                            }
                        },

                    ],
                    as: 'applied'
                }
            },
            {
                $addFields: {
                    applied: { $arrayElemAt: ['$applied', 0] }
                }
            }
        ]) as RewardsTypes[]

        //res.status(StatusCodes.OK).json(rewards)
        res.status(StatusCodes.OK).json({ current: rewards.filter(r => r.targetTurnover < totalBet), upcoming: rewards.filter(r => r.targetTurnover > totalBet) })
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};
export const collectRewards = async (req: AuthenticatedRequest, res: Response) => {
    const username = req.username;
    const { id } = req.params;
    try {

        const rewards = await Rewards.findOne({
            _id: new ObjectId(id)
        }) as RewardsTypes
        const myRewards = await RewardsHistory.create({
            amount: rewards.bonusAmount,
            rewardId: rewards._id,
            userId: username
        })
        const user = await Users.findOne({ username: username })
        if (user) {
            user.balance = user.balance + rewards.bonusAmount
            user.save()

        }
        if (!username) {
            return res.status(400).json({ error: "Invalid userID" })
        }
        await sendNotificationToAdmin("Get Rewards!!", `${username} has complete level ${rewards.level} and get amount ${rewards.bonusAmount}`, username, DATATYPES[3])

        res.status(StatusCodes.OK).json(myRewards)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};
export const getRewardsHistory = async (req: AuthenticatedRequest, res: Response) => {
    const username = req.username;
    try {

        const myRewards = await RewardsHistory.find({
            userId: username
        }).sort({ date: -1 })

        res.status(StatusCodes.OK).json(myRewards)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};