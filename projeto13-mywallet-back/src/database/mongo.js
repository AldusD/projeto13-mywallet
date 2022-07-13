import dotenv from 'dotenv';
import { MongoClient , ObjectId } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, { auth: { username: 'root', password: 'undostres' } });
let db;

client.connect().then(() => {
    db = client.db("projeto-13")
});

const objectId = ObjectId;
export { db, objectId }