import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db';
import userRouter from './routes/authRoute';
import contentRouter from './routes/contentRoute';
import auth from './middleware/authMiddleware';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

const app = express();
app.use(express.json())



app.use('/api/v1', userRouter)
app.use('/api/v1', auth, contentRouter)

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
  connectDB()
});
