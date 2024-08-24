import { ObjectId } from 'mongodb';
import { Agents, Banner, Deposit, History, Notification, PromotionHistory, Promotions, Users, Wallets, Withdraws } from "../connections/databaseConnection.js";
import { StatusCodes } from "http-status-codes";
import { uploadImageBanner } from './fileUploadController.js';
import { DATATYPES, sendNotificationToUser } from '../functions/sendNotification.js';
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const depositReport = async (req, res) => {
    try {
        let monthlyDeposit = [];
        let deposit = await Deposit.find({ status: "ACCEPTED" });
        let subTotal = 0;
        deposit.map(s => {
            const isSame = monthlyDeposit.find(r => months[s.date.getMonth()] === r.month && s.date.getFullYear() === r.year);
            if (isSame) {
                monthlyDeposit[monthlyDeposit.indexOf(isSame)] = {
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(),
                    deposit: (isSame.deposit + s.amount)
                };
            }
            else {
                monthlyDeposit.push({
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(), deposit: s.amount
                });
            }
            subTotal = (subTotal + s.amount);
        });
        res.status(StatusCodes.OK).json({ monthlyDeposit, subTotal });
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const revenueReport = async (req, res) => {
    try {
        let monthlyHistory = [];
        let history = await History.find();
        let subTotal = 0;
        history.map(s => {
            const isSame = monthlyHistory.find(r => months[s.date.getMonth()] === r.month && s.date.getFullYear() === r.year);
            if (isSame) {
                monthlyHistory[monthlyHistory.indexOf(isSame)] = {
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(),
                    revenue: (isSame.revenue + s.bet) - s.win
                };
            }
            else {
                monthlyHistory.push({
                    month: months[s.date.getMonth()],
                    year: s.date.getFullYear(), revenue: s.bet - s.win
                });
            }
            subTotal = (subTotal + s.bet) - s.win;
        });
        res.status(StatusCodes.OK).json({ monthlyHistory, subTotal });
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const depositHistory = async (req, res) => {
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
            },
            { $sort: { date: -1 } }
        ]);
        res.status(StatusCodes.OK).json(combineDeposit);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const toggleStatusDeposit = async (req, res) => {
    //const { id, status } = req.params;
    const { message, id, status, username } = req.body;
    if (!id || !username) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "All field are required" });
    }
    try {
        const deposit = await Deposit.findOne({ _id: new ObjectId(id) });
        //const deposit = await Deposit.updateOne({ _id: new ObjectId(id) }, { $set: { status: status ? "ACCEPTED" : "CANCELLED", remarks: message } })
        const user = await Users.findOne({ username: username });
        if (!user || !deposit || !deposit.amount) {
            return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Deposit id and Username is invalid " });
        }
        deposit.status = status ? "ACCEPTED" : "CANCELLED";
        deposit.remarks = message;
        deposit.save();
        if (status) {
            user.balance = user.balance + deposit.amount;
            if (deposit.promotionId != "undefined" && deposit.promotionId) {
                await PromotionHistory.create({
                    promotionId: deposit.promotionId,
                    userId: username,
                });
            }
        }
        user.save();
        await sendNotificationToUser("Deposit status!!", `Your deposit request amount ${deposit.amount}BDT has ${status ? "ACCEPTED" : "CANCELLED"} by game provider`, username, DATATYPES[0]);
        res.status(StatusCodes.OK).json(deposit);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: "Invalid ID" });
    }
};
export const turnOverHistory = async (req, res) => {
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
        ]);
        const processPromotions = async (combinePromotions) => {
            for (const d of combinePromotions) {
                await Promise.all(d.deposit.map(async (s, i) => {
                    let totalTurnover = 0;
                    const history = await History.find({ date: { $gte: s.date }, username: s.userId });
                    history.forEach((h) => {
                        totalTurnover += h.bet;
                    });
                    d.deposit[i] = { ...s, totalTurnover: d.turnOverAmount < totalTurnover ? d.turnOverAmount : totalTurnover };
                }));
            }
        };
        await processPromotions(combinePromotions);
        res.status(StatusCodes.OK).json(combinePromotions);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const createPromotion = async (req, res) => {
    const { title, description, details, bonusPercentage, turnOverAmount } = req.body;
    if (!title || !description || !details || !bonusPercentage || !turnOverAmount) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Field are required" });
    }
    try {
        const { path } = (await uploadImageBanner(req, res));
        //console.log(path);
        const promotion = await Promotions.create({
            title: title,
            description: description,
            details: details,
            bonusPercentage: parseInt(bonusPercentage),
            turnOverAmount: parseInt(turnOverAmount),
            applicable: true,
            image: path
        });
        //console.log(promotion);
        res.status(StatusCodes.OK).json(promotion);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const deletePromotion = async (req, res) => {
    const { promotionID } = req.params;
    try {
        const promotion = await Promotions.deleteOne({
            _id: new ObjectId(promotionID)
        });
        //console.log(promotion);
        res.status(StatusCodes.OK).json(promotion);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const withdrawHistory = async (req, res) => {
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
            { $sort: { date: -1 } }
        ]);
        await Promise.all(combineWallet.map(async (d, i) => {
            const details = await Wallets.findOne({ _id: new ObjectId(d?.wallet?.walletId) });
            combineWallet[i] = { ...d, wallet: { ...d.wallet, walletDetails: details } };
        }));
        res.status(StatusCodes.OK).json(combineWallet);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
    }
};
export const toggleStatusWithdraw = async (req, res) => {
    const { message, id, status, username } = req.body;
    if (!id || !username) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: "All field are required" });
    }
    try {
        const withdraw = await Withdraws.findOne({ _id: new ObjectId(id) });
        const user = await Users.findOne({ username: username });
        if (!withdraw || !withdraw.amount || !user) {
            return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Withdraw id and username is invalid " });
        }
        withdraw.status = status ? "ACCEPTED" : "CANCELLED";
        withdraw.remarks = message;
        withdraw.save();
        if (!status) {
            user.balance = user.balance + withdraw.amount;
            user.save();
        }
        await sendNotificationToUser("Withdraw status!!", `Your withdraw request amount ${withdraw.amount}BDT has ${status ? "ACCEPTED" : "CANCELLED"} by game provider`, username, DATATYPES[1]);
        res.status(StatusCodes.OK).json(withdraw);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: "Invalid ID" });
    }
};
export const getNotificationAdmin = async (req, res) => {
    try {
        const notification = await Notification.aggregate([
            { $match: { userId: { $ne: null } } },
            {
                $lookup: {
                    from: "users",
                    let: { userIdObj: "$userId" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$username", "$$userIdObj"] },
                            },
                        },
                    ],
                    as: "user",
                },
            },
            {
                $addFields: {
                    user: { $arrayElemAt: ["$user", 0] },
                },
            },
            { $sort: { date: -1 } }
        ]);
        await Notification.updateMany({ userId: { $ne: null } }, {
            read: true
        });
        res.status(StatusCodes.OK).json(notification);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const getUnreadNotificationCount = async (req, res) => {
    try {
        const notification = await Notification.countDocuments({ userId: { $ne: null }, read: false });
        res.status(StatusCodes.OK).json(notification);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const getNotificationUser = async (req, res) => {
    const username = req.username;
    try {
        const notification = await Notification.aggregate([
            { $match: { receiverId: username } },
            {
                $lookup: {
                    from: "users",
                    let: { userIdObj: "$receiverId" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$username", "$$userIdObj"] },
                            },
                        },
                    ],
                    as: "user",
                },
            },
            {
                $addFields: {
                    user: { $arrayElemAt: ["$user", 0] },
                },
            },
            { $sort: { date: -1 } }
        ]);
        await Notification.updateMany({ receiverId: username }, {
            read: true
        });
        res.status(StatusCodes.OK).json(notification);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const getUnreadNotificationCountUser = async (req, res) => {
    const username = req.username;
    try {
        const notification = await Notification.countDocuments({ receiverId: username, read: false });
        res.status(StatusCodes.OK).json(notification);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const getAllUser = async (req, res) => {
    try {
        const users = await Users.find().sort({ date: -1 });
        res.status(StatusCodes.OK).json(users);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const registerAgents = async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name)
        return res.status(StatusCodes.EXPECTATION_FAILED).json(`email ,password or name is required`);
    try {
        const agent = await Agents.create({
            password,
            email,
            name
        });
        res.status(StatusCodes.OK).json(agent);
    }
    catch (error) {
        return res.status(StatusCodes.EXPECTATION_FAILED).json("error creating agent");
    }
};
export const loginAgents = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(StatusCodes.EXPECTATION_FAILED).json(`email ,password  is required`);
    try {
        const agent = await Agents.findOne({ email: email, password: password });
        if (agent)
            return res.status(StatusCodes.OK).json(agent);
        res.status(StatusCodes.EXPECTATION_FAILED).json("Invalid Agent");
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json("error creating agent");
    }
};
export const changePasswordAgents = async (req, res) => {
    const { oldPassword, newPassword, email } = req.body;
    if (oldPassword === newPassword)
        return res.status(StatusCodes.EXPECTATION_FAILED).json("Password is same");
    try {
        const agent = await Agents.findOne({ email: email, password: oldPassword });
        if (!agent)
            return res.status(StatusCodes.EXPECTATION_FAILED).json("Invalid Agent password");
        await Agents.updateOne({ email: email }, { password: newPassword });
        res.status(StatusCodes.OK).json("Success");
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json("error updating agents");
    }
};
export const addSlider = async (req, res) => {
    if (!req.file) {
        return res.status(StatusCodes.EXPECTATION_FAILED).json("Invalid file");
    }
    try {
        const { path } = await uploadImageBanner(req, res);
        if (!path)
            return res.status(StatusCodes.EXPECTATION_FAILED).json("Invalid file");
        const banner = await Banner.create({
            path: path
        });
        res.status(StatusCodes.OK).json(banner);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
};
export const deleteSlider = async (req, res) => {
    const { id } = req.params;
    try {
        const banner = await Banner.deleteOne({
            _id: new ObjectId(id)
        });
        res.status(StatusCodes.OK).json(banner);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json("Failed to delete file");
    }
};
export const getSlider = async (req, res) => {
    try {
        const banner = await Banner.find();
        res.status(StatusCodes.OK).json(banner);
    }
    catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json("Failed to upload file");
    }
};
