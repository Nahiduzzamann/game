
import mongoose from "mongoose";
import { bonusHistory, deposit, gameHistory, games, notification, promotionHistory, promotions, rewardsHistory, rewardsList, userWallets, users, voucher, wallets, withdraw } from "../schema/gameSchema";

export const mongoConnection = async () => {
  try {

    await mongoose.connect(process.env.DB as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export const Users = mongoose.model("users", users);
export const Games = mongoose.model("games", games);
export const History = mongoose.model("history", gameHistory);
export const Deposit=mongoose.model("deposit",deposit)
export const Promotions=mongoose.model("promotions",promotions)
export const Wallets=mongoose.model("wallets",wallets)
export const PromotionHistory=mongoose.model("promotionHistory",promotionHistory)
export const UserWallets=mongoose.model("userWallet",userWallets)
export const Withdraws=mongoose.model("withdraws",withdraw)
export const BonusHistory=mongoose.model("bonusHistory",bonusHistory)
export const Voucher=mongoose.model("voucher",voucher)
export const Rewards=mongoose.model("rewards",rewardsList)
export const RewardsHistory=mongoose.model("rewardsHistory",rewardsHistory)
export const Notification=mongoose.model("notifications",notification)