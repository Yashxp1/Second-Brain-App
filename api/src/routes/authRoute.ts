import express from 'express';
import { signup, signin } from '../controller/authController';
import auth from '../middleware/authMiddleware';

const userRouter = express.Router();

userRouter.post('/auth/signup', auth, signup);
userRouter.post('/auth/signin', auth, signin);
