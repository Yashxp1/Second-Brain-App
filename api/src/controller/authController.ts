import { z } from 'zod';
import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';

const validate = z.object({
  username: z.string(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 8 characters long.' }),
});

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseData = validate.safeParse(req.body);

    // console.log('ZOD VALIDATION: ', parseData);

    if (!parseData.success) {
      res.status(400).json({
        success: false,
        message: parseData.error.errors[0].message,
      });
      return;
    }

    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });

    res.status(200).json({
      success: true,
      user,
      message: 'New user created',
    });
  } catch (error) {
    console.error('Error in SIGNUP FUN', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseData = validate.safeParse(req.body);

    if (!parseData.success) {
      res.status(400).json({
        success: false,
        message: parseData.error.errors[0].message,
      });
      return;
    }

    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      res.status(400).json({
        success: false,
        message: 'User does not exist',
      });
      return;
    }

    if (!existingUser.password) {
      res.status(400).json({
        success: false,
        message: 'Password is not set for this user.',
      });
      return;
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    if (!checkPassword) {
      res.status(400).json({
        success: false,
        message: 'Incorrect Password',
      });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      res.status(500).json({
        success: false,
        message: 'JWT Secret is missing in the server configuration.',
      });
      return;
    }

    const token = jwt.sign({ id: existingUser._id.toString() }, JWT_SECRET, {
      expiresIn: '7h',
    });

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token: token,
    });
    
    return;

  } catch (error) {
    console.error('Error in SIGNUP FUN', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
