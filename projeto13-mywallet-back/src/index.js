import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import transactionsRouter from './routes/transactionsRouter.js';

dotenv.config();

const app = express();
app.use(cors(), json());
app.use(authRouter);
app.use(transactionsRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log("Running in port " + port);
});
