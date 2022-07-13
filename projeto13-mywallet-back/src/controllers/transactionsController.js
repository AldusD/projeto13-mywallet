import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db, objectId } from '../database/mongo.js';
import joi from 'joi';
import dayjs from 'dayjs';

export const getTransactions = async (req, res) => {
    // user had its authorization confirmed by authUser
  const session = res.locals.session;
  console.log(session)

  try {
    const transactions = await db.collection('transactions').find({ userId: new objectId(session.userId) }).toArray(); 
    return res.send(transactions);    
  } catch (error) {
    return res.sendStatus(500);
  } 

}

export const insertTransaction = async (req, res) => {
  // user had its authorization confirmed by authUser
  const transactionSchema = joi.object({
    action: joi.string().valid('sum', 'sub').required(),
    value: joi.number().required(),
    description: joi.string().required()
  })
  const transaction = req.body;
  const session = res.locals.session;
  const userId = session.userId;

  try {
      await db.collection("transactions").insertOne({ ...transaction, userId, date: dayjs().format('MM:DD')});
      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(500);
    }
}
// transaction: { front - value, action back - date, userId }