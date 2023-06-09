import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

//const mongoClient = new MongoClient("mongodb://localhost:27017/drivencracy");
const mongoClient = new MongoClient(process.env.DATABASE_URL);
export const db = mongoClient.db();
try {
    await mongoClient.connect();
    console.log("MongoDB Online!!!");
}
catch (error) {
    console.log(error.message);
}
