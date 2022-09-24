import mongoose from 'mongoose';

export const connectMongo = async () =>
  await mongoose.connect(
    `mongodb+srv://recoen:qweasd@cluster0.twmm6ue.mongodb.net/?retryWrites=true&w=majority`,
  );
