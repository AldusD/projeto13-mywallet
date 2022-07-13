import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../database/mongo.js';
import joi from 'joi';


export const signup = async (req, res) => {
    const singupSchema = joi.object({
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
    })
    const user = req.body;

    const repeatedUser = await db.collection("users").findOne({email: user.email});
    if(repeatedUser) return res.sendStatus(409); 
    const { error } = singupSchema.validate(user);
    if (error) return res.sendStatus(422);

    try {
      const encryptedPassword = bcrypt.hashSync(user.password, 8);
      await db.collection('users').insertOne({ ...user, password: encryptedPassword });
      return res.sendStatus(201);
    
    } catch (error) {
      return res.sendStatus(500);
    }
}

export const login = async (req, res) => {
    const user = req.body;
    const loginSchema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required()
    });

    const { error } = loginSchema.validate(user);
    if( error ) return res.sendStatus(422);

    const dbUser = await db.collection('users').findOne({ email: user.email });
    const isCorrectPassword = bcrypt.compareSync(user.password, dbUser.password);
    
    if (dbUser && isCorrectPassword) {
    const token = uuid();
    await db.collection('sessions').insertOne({
        userId: dbUser._id,
        token
    });
    
    return res.status(200).send({ token });
  } else {
    return res.sendStatus(404);
  }
}
