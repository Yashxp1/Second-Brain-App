import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { AuthenticationRequest } from '../lib/types';

const auth = async (
  req: AuthenticationRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(400).json({
        success: false,
        message: 'Token is missing or invalid',
      });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      res.status(500).json({
        success: false,
        message: 'JWT is not defined',
      });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    if (decoded) {
      req.userId = decoded.id;
      next();
    } else {
      res.status(403).json({
        success: false,
        message: 'Invalid Token',
      });
    }
  } catch (error) {
    console.error('Error in auth middleware', error);
    res.status(500).json({
      success: false,
      message: 'Error during token verification',
    });
  }
};

export default auth