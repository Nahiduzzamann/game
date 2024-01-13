import mongoose from "mongoose";
import { games, users } from "../schema/gameSchema";

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