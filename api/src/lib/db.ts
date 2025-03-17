import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`🟢 MONGODB CONNECTED SUCCESSFULLY: ${conn.connection.host}`);
  } catch (error) {
    console.error('🔴 Error connecting to MONGODB', error);
  }
};
