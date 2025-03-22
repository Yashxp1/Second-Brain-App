import express from 'express';
import { signup, signin } from '../controller/authController';
import {
  addContent,
  editContent,
  getAllContent,
} from '../controller/contentController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.post('/auth/signup', auth, signup);
router.post('/auth/signin', auth, signin);
