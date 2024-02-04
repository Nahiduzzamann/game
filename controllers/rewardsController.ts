import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../connections/databaseConnection';
import { AuthenticatedRequest } from '../middlewares/checkLogin';
import sendSms from '../functions/sendSms';
const jwt = require('jsonwebtoken');

export const getVoucher = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const username = req.username;

    // Validate request parameters
    if (!username) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    // Check if the user exists
    const user = await Users.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if(user.balance<0){
      user.balance=0;
      user.save()
    }

    // Return the user details
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
