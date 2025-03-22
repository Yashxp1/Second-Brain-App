import express from 'express';
import { createTag, getAllTag } from '../controller/tagController';
import auth from '../middleware/authMiddleware';

const tagRouter = express.Router();

tagRouter.post('/tags', auth, createTag);  
tagRouter.get('/tags', getAllTag);        

export default tagRouter;
