import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
