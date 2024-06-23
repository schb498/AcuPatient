import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

const mongoConnectionUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.p008vdk.mongodb.net/${dbName}`;

export async function connectToCluster() {
  try {
    await mongoose.connect(mongoConnectionUrl);
    console.log("Connected to MongoDB cluster");
  } catch (error) {
    console.error("Error connecting to MongoDB cluster: ", error);
    throw error;
  }
}

export function closeClusterConnection() {
  return mongoose.connection.close();
}
