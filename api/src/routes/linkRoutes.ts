import express from 'express';
import auth from '../middleware/authMiddleware';
import {
  checkStatus,
  createLink,
  shareLink,
} from '../controller/linkController';

const linkRoute = express.Router();

linkRoute.post('/link/create', auth, createLink);  
linkRoute.get('/link/share/:hash', shareLink);     
linkRoute.get('/link/status', auth, checkStatus);  
linkRoute.delete('/link/status', auth, checkStatus);

export default linkRoute
