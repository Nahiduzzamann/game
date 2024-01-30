import { Request, Response } from "express";
import { Deposit, History } from "../connections/databaseConnection";
import { DepositTypes, GameHistory } from "../data/allTypes";
import { StatusCodes } from "http-status-codes";

interface MonthlyDepositTypes {
    month: string,
    deposit: number,
    year:number
}
interface MonthlyRevenueTypes {
    month: string,
    revenue: number,
    year: number
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const depositReport = async (req: Request, res: Response) => {
    try {
        let monthlyDeposit: MonthlyDepositTypes[] = []
        let deposit = await Deposit.find({status:"ACCEPTED"}) as DepositTypes[] 
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
            subTotal=(subTotal+s.amount)
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
            subTotal=(subTotal+s.bet)-s.win;
        })

        res.status(StatusCodes.OK).json({ monthlyHistory, subTotal })

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}