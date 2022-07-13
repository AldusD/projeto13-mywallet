import { db } from '../database/mongo.js';

export const authUser = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  const session = await db.collection('sessions').findOne({ token });
    if (!session) return res.sendStatus(401);
  
  res.locals.session = session;
  next();
}
