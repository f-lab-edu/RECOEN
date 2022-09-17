import mongoose from 'mongoose';

export const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
