
import mongoose from "mongoose";
import { deposit, gameHistory, games, promotionHistory, promotions, users, wallets } from "../schema/gameSchema";

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