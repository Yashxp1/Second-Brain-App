import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM SERVER');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
