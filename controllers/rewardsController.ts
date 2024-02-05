import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Users, Voucher } from '../connections/databaseConnection';
import { AuthenticatedRequest } from '../middlewares/checkLogin';
import sendSms from '../functions/sendSms';
import { StatusCodes } from 'http-status-codes';
const jwt = require('jsonwebtoken');

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
            bonusAmount:parseInt(bonusAmount),
            code,
        })
        res.status(StatusCodes.OK).json(voucher)
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error)
    }
};

export const applyVoucher = async (req: AuthenticatedRequest, res: Response) => {

};

export const getRewards = async (req: AuthenticatedRequest, res: Response) => {

};
export const addRewards = async (req: AuthenticatedRequest, res: Response) => {

};
export const deleteRewards = async (req: AuthenticatedRequest, res: Response) => {

};
export const getUserRewards = async (req: AuthenticatedRequest, res: Response) => {

};
export const collectRewards = async (req: AuthenticatedRequest, res: Response) => {

};