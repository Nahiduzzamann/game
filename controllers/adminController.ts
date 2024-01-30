import { Request, Response } from "express";
import { Deposit } from "../connections/databaseConnection";
import { DepositTypes } from "../data/allTypes";

export const depositReport=async(req:Request,res:Response)=>{
    try {
        const deposit=await Deposit.find() as DepositTypes[]
        
    } catch (error) {
        
    }
}