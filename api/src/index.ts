import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

const app = express();
app.use(express.json())



app.get('/api/v1', )

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
  connectDB()
});
