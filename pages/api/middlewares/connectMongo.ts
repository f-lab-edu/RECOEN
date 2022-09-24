import mongoose from 'mongoose';

export const connectMongo = async () =>
  await mongoose.connect(`${process.env.MONGO_URI}`);
