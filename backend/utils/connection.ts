// connection.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI: string = process.env.MONGO_URI || '';

const connectDB = async (): Promise<void> => {
  try {
    if (!MONGO_URI) {
      throw new Error('MongoDB URI is not provided');
    }

    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
