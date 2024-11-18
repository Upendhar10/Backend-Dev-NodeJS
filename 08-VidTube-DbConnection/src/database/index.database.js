import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const DB_Instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`
        \n MongoDB Connected! | DB HOST : ${DB_Instance.connection.host}`);
  } catch (error) {
    console.error("MONGODB Connection Error : ", error);
    process.exit(1);
  }
};

export default connectDB;
