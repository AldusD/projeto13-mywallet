import express from 'express';
import { getTransactions, insertTransaction } from '../controllers/transactionsController.js';
import { authUser } from '../middlewares/authUser.js';
const router = express.Router();

router.get('/transactions', authUser, getTransactions);
router.post('/transactions', authUser, insertTransaction);

export default router;

