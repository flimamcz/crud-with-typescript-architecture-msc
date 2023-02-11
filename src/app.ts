import express from 'express';
import { productRouter, userRouter, ordersRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', ordersRouter);

export default app;
