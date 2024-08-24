import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; // Use import statement for ES module

export interface AuthenticatedRequest extends Request {
  username?: string;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET as string) as { username: string };
    req.username = decoded.username;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
