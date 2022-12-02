import { Schema, model, models } from 'mongoose';

const bookArticleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
  },
  { timestamps: true },
);

const BookArticleModel = models.Book || model('Book', bookArticleSchema);

export default BookArticleModel;
