import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';


export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'All the fields are required' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: 'Password must have more than 6 characters',
        });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists ' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });

    res
      .status(201)
      .json({ success: true, message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error in auth controller', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {};
