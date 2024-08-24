import mongoose from "mongoose";
import { agents, banner, bonusHistory, deposit, gameHistory, games, notification, promotionHistory, promotions, rewardsHistory, rewardsList, userWallets, users, voucher, wallets, withdraw } from "../schema/gameSchema.js";
export const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
export const Users = mongoose.model("users", users);
export const Games = mongoose.model("games", games);
export const History = mongoose.model("history", gameHistory);
export const Deposit = mongoose.model("deposit", deposit);
export const Promotions = mongoose.model("promotions", promotions);
export const Wallets = mongoose.model("wallets", wallets);
export const PromotionHistory = mongoose.model("promotionHistory", promotionHistory);
export const UserWallets = mongoose.model("userWallet", userWallets);
export const Withdraws = mongoose.model("withdraws", withdraw);
export const BonusHistory = mongoose.model("bonusHistory", bonusHistory);
export const Voucher = mongoose.model("voucher", voucher);
export const Rewards = mongoose.model("rewards", rewardsList);
export const RewardsHistory = mongoose.model("rewardsHistory", rewardsHistory);
export const Notification = mongoose.model("notifications", notification);
export const Agents = mongoose.model("agents", agents);
export const Banner = mongoose.model("banner", banner);
