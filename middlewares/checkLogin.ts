import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

export interface AuthenticatedRequest extends Request {
  username?: string;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  // console.log(token);
  

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET) as { username: string };
    req.username = decoded.username;

    next();
  } catch (error) {
    // console.error(error);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
