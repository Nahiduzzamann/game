
import {
  DepositTypes,
  GameHistory,
  UserTypes,
  PromotionTypes,
} from "./../data/allTypes";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { uploadImageBanner, uploadImageSquire } from "./fileUploadController";
import {
  BonusHistory,
  Deposit,
  History,
  PromotionHistory,
  Promotions,
  UserWallets,
  Users,
  Wallets,
  Withdraws,
} from "../connections/databaseConnection";
import { AuthenticatedRequest } from "../middlewares/checkLogin";
import { UserWalletsTypes, WalletsTypes } from "../data/allTypes";
import { ObjectId } from "mongodb";
import { WalletCombineTypes } from "./adminController";
import { DATATYPES, sendNotificationToAdmin, sendNotificationToUser } from "../functions/sendNotification";

interface FilePath {
  path: string;
}
export interface PromotionHistoryTypes {
  _id: string,
  promotionId: string,
  userId: string,
  date: Date,
  completed: boolean,
  promotion: PromotionTypes,
  totalTurnover: number
}

export const createPromotions = async (req: Request, res: Response) => {
  const {
    title,
    description,
    details,
    bonusPercentage,
    turnOverAmount,
    applicable,
  } = req.body;
  if (
    !title ||
    !description ||
    !details ||
    !bonusPercentage ||
    !turnOverAmount
  ) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }
  if (!req.file) {
    return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Image require" });
  }

  try {
    const { path } = (await uploadImageBanner(req, res)) as FilePath;
    const promotion = await Promotions.create({
      title: title,
      description: description,
      details: details,
      bonusPercentage: parseInt(bonusPercentage),
      image: path,
      turnOverAmount: parseInt(turnOverAmount),
      applicable: applicable ? true : false,
    });
    res.status(StatusCodes.OK).json(promotion);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const createWallet = async (req: Request, res: Response) => {
  const { methodName, slogan, walletNumber } = req.body;
  if (!methodName || !slogan || !walletNumber) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }
  if (!req.file) {
    return res.status(StatusCodes.BAD_GATEWAY).json({ error: "Image require" });
  }

  try {
    const { path } = (await uploadImageSquire(req, res)) as FilePath;
    const wallet = await Wallets.create({
      methodName,
      slogan,
      walletNumber,
      icon: path,
    });
    res.status(StatusCodes.OK).json(wallet);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const createUserWallet = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { walletNumber, walletId } = req.body;
  const { username } = req;
  if (!walletNumber || !walletId) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }

  try {
    const wallet = await UserWallets.create({
      walletNumber,
      walletId,
      userId: username,
    });
    res.status(StatusCodes.OK).json(wallet);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const updateUserWallet = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { walletNumber, walletId } = req.body;
  const { username } = req;
  if (!walletNumber || !walletId) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }

  try {
    const wallet = await UserWallets.updateOne({
      _id: new ObjectId(walletId),
      userId: username
    }, {
      walletNumber
    });

    res.status(StatusCodes.OK).json(wallet);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: "Invalid wallet Id" });
  }
};
export const getUserWallets = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { username } = req;
  try {
    const combinedWallets = await UserWallets.aggregate([
      {
        $match: { userId: username },
      },
      {
        $lookup: {
          from: "wallets",
          let: { userIdObj: { $toObjectId: "$walletId" } },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$userIdObj"] },
              },
            },
          ],
          as: "wallet",
        },
      },
      {
        $addFields: {
          wallet: { $arrayElemAt: ["$wallet", 0] },
        },
      },
    ]);

    // console.log(combinedWallets);
    res.status(StatusCodes.OK).json(combinedWallets);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const deleteUserWallets = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { id } = req.params;
  try {
    const combinedWallets = await UserWallets.deleteOne({
      _id: new ObjectId(id),
    });

    // console.log(combinedWallets);
    res.status(StatusCodes.OK).json(combinedWallets);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const getWallets = async (req: Request, res: Response) => {
  try {
    const wallet = await Wallets.find();
    res.status(StatusCodes.OK).json(wallet);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};

export const getPromotions = async (req: Request, res: Response) => {
  const { applicable } = req.query;

  try {
    if (applicable) {
      const promotions = await Promotions.find({
        applicable: applicable ? true : null,
      });
      res.status(StatusCodes.OK).json(promotions);
    } else {
      const promotions = await Promotions.find();
      res.status(StatusCodes.OK).json(promotions);
    }
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};

export const makeDeposit = async (req: AuthenticatedRequest, res: Response) => {
  const { walletId, amount, promotionId, tranXId } = req.body;
  const { username } = req;
  if (!walletId || !amount || !tranXId || !username) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }
  try {

    const deposit = await Deposit.create({
      walletId,
      amount: parseInt(amount),
      promotionId,
      tranXId,
      userId: username,
    });
    await sendNotificationToAdmin("New deposit request!!", `You have new deposit request amount ${amount} by ${username}`, username, DATATYPES[0])
    res.status(StatusCodes.OK).json(deposit);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const getDeposit = async (req: AuthenticatedRequest, res: Response) => {
  const { username } = req;

  try {
    const deposit = await Deposit.find({
      userId: username,
    }).sort({ date: -1 });
    res.status(StatusCodes.OK).json(deposit);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const createWithdraw = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { amount, walletId } = req.body;
  const username = req.username;
  if (!amount || !walletId) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ error: "Parameter are required" });
  }

  try {
    let balance = 500;
    const deposit = (await Deposit.find({
      userId: username,
      status: "ACCEPTED",
    }).sort({ date: -1 })) as DepositTypes[];

    if (deposit.length === 0) {
      // Handle the case when there is no deposit for the user
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "No deposit found" });
    }
    const promotion =
      deposit[0].promotionId != "undefined" && deposit[0].promotionId
        ? ((await Promotions.findOne({
          _id: new ObjectId(deposit[0].promotionId),
        })) as PromotionTypes)
        : null;

    const user = (await Users.findOne({ username: username })) as UserTypes;
    if (promotion) {
      const gameHistory = (await History.find({
        date: { $gte: deposit[0].date },
        username: username
      })) as GameHistory[];
      let turnOverAmount = 0;
      gameHistory.map((d) => {
        turnOverAmount = turnOverAmount + d.bet;
      });
      if (turnOverAmount < promotion.turnOverAmount) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Please complete your turnover amount" });
        return;
      }
    }
    if (parseInt(amount) < balance) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "You can only cash out over 500 BDT" });
    }
    if (user.balance < parseInt(amount)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Low balance to cash out" });
    }
    if (!username) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid" });
    }
    const d = await Withdraws.create({
      walletId,
      amount,
      userId: username,
    });
    const decreaseAmountBy = parseInt(amount);

    user.balance = user.balance - decreaseAmountBy;
    user.save();
    await sendNotificationToAdmin("New Withdraw request!!", `You have new withdraw request amount ${decreaseAmountBy} by ${username}`, username, DATATYPES[1])
    res.status(StatusCodes.OK).json(d);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json(error);
  }
};
export const getWithdrawHistory = async (req: AuthenticatedRequest, res: Response) => {
  const { username } = req;

  try {
    const combineWallet = await Withdraws.aggregate([
      {
        $match: { userId: username }
      },
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

    ]) as WalletCombineTypes[]

    await Promise.all(combineWallet.map(async (d, i) => {
      const details = await Wallets.findOne({ _id: new ObjectId(d?.wallet?.walletId) }) as WalletsTypes
      combineWallet[i] = { ...d, wallet: { ...d.wallet, walletDetails: details } }
    }))
    res.status(StatusCodes.OK).json(combineWallet);
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
  }
};
export const getTurnOvers = async (req: AuthenticatedRequest, res: Response) => {

  const username = req.username;
  try {
    const runningTurn = await PromotionHistory.aggregate([
      {
        $match: { userId: username, promotionId: { $ne: "undefined" } }
      },
      {
        $lookup: {
          from: 'promotions',
          let: { userIdObj: { $toObjectId: '$promotionId' } },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$_id', '$$userIdObj'] }
              }
            }
          ],
          as: 'promotion'
        },
      },
      {
        $addFields: {
          promotion: { $arrayElemAt: ['$promotion', 0] }
        }
      },
      { $sort: { date: -1 } }
    ]) as PromotionHistoryTypes[]
    await Promise.all(runningTurn.map(async (turn, i) => {
      if (!turn.completed && turn.promotion) {
        const gameHistory = await History.find({ username: username, date: { $gte: turn.date } }) as GameHistory[]
        console.log(gameHistory);

        let totalTurn = 0;
        gameHistory.map(d => {
          totalTurn = totalTurn + d.bet;

        })
        if (totalTurn > turn.promotion.turnOverAmount) {
          turn.completed = true;
          await PromotionHistory.updateOne({ _id: new ObjectId(turn._id) }, {
            completed: true
          })
          const deposit = await Deposit.find({ userId: username, promotionId: turn.promotionId }).sort({ date: -1 }) as DepositTypes[]
          await BonusHistory.create({
            userId: username,
            amount: (deposit[0].amount * turn.promotion.bonusPercentage) / 100,
            promotionId: turn.promotionId
          })
          const user = await Users.findOne({ username: username }) as UserTypes
          if (user && username) {
            user.balance = user.balance + (deposit[0].amount * turn.promotion.bonusPercentage) / 100
            user.save()
            await sendNotificationToUser("Complete Turnover!!", `You have complete turnover target amount ${turn.totalTurnover} and get ${((deposit[0].amount * turn.promotion.bonusPercentage) / 100).toFixed(2)} Credit`, username, DATATYPES[4])
          }

        }
        runningTurn[i] = { ...turn, totalTurnover: totalTurn }


      }
    }))
    res.status(StatusCodes.OK).json(runningTurn)

  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json(error)
  }
}
export const getBonus = async (req: AuthenticatedRequest, res: Response) => {

  const username = req.username;
  try {
    const bonus = await BonusHistory.find({ userId: username }).sort({ date: -1 })
    res.status(StatusCodes.OK).json(bonus)

  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json(error)
  }
}