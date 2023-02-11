import express from 'express';
import { productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/', productRouter);
app.use('/', userRouter);

export default app;
