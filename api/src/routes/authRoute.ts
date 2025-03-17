import express from 'express';
import { signup, login } from '../controller/authController';

const router = express.Router()

router.post('/auth', signup)
// app.post('/auth', login)