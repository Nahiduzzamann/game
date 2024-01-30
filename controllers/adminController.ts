import { Request, Response } from "express";
import { Deposit, History } from "../connections/databaseConnection";
import { DepositTypes, GameHistory } from "../data/allTypes";
import { StatusCodes } from "http-status-codes";

interface MonthlyDepositTypes {
    month: string,
    deposit: number
}
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const depositReport = async (req: Request, res: Response) => {
    try {
        let monthlyDeposit: MonthlyDepositTypes[] = []
        const currentDate = new Date()
        const deposit = await Deposit.find({ status: "ACCEPTED" }).sort({ date: -1 }) as DepositTypes[]
        let totalDeposit = 0;
        let currentMonth = deposit[0].date.getMonth()
        let subTotal = 0;
        deposit.map(d => {
            if (d.date.getMonth() === currentMonth) {
                //console.log(d.date.getMonth());

                totalDeposit = totalDeposit + d.amount;
            } else {
                monthlyDeposit.push({
                    month: months[currentMonth],
                    deposit: totalDeposit
                })
                totalDeposit = 0;
                currentMonth = d.date.getMonth();
                totalDeposit = totalDeposit + d.amount;
            }
            subTotal = subTotal + d.amount;
        })
        if (currentMonth === deposit[deposit.length - 1].date.getMonth()) {
            monthlyDeposit.push({
                month: months[currentMonth],
                deposit: totalDeposit
            })
        }

        res.status(StatusCodes.OK).json({ monthlyDeposit, subTotal })

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}
export const revenueReport = async (req: Request, res: Response) => {
    try {
        let monthlyHistory: MonthlyDepositTypes[] = []
        let history = await History.find() as GameHistory[]
        history = history.reverse()
        let totalRevenue = 0;
        let currentMonth = history[0].date.getMonth()
        let subTotal = 0;
        history.map(d => {
            if (d.date.getMonth() === currentMonth) {
                totalRevenue = (totalRevenue + d.bet) - d.win;
            } else {
                monthlyHistory.push({
                    month: months[currentMonth],
                    deposit: totalRevenue
                })
                totalRevenue = 0;
                currentMonth = d.date.getMonth();
                totalRevenue = (totalRevenue + d.bet) - d.win;
            }
            subTotal = (subTotal + d.bet) - d.win;
        })
        if (currentMonth === history[history.length - 1].date.getMonth()) {
            monthlyHistory.push({
                month: months[currentMonth],
                deposit: totalRevenue
            })
        }

        res.status(StatusCodes.OK).json({ monthlyHistory, subTotal })

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error })
    }
}