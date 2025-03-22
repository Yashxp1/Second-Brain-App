import express from 'express';
import auth from '../middleware/authMiddleware';
import {
  addContent,
  editContent,
  getAllContent,
} from '../controller/contentController';
const contentRouter = express.Router();

contentRouter.post('/content/add', auth, addContent);
contentRouter.get('/content/get', auth, getAllContent);
contentRouter.put('/content/edit', auth, editContent);
