import { Schema, model, models } from 'mongoose';
import { ArticleModel } from 'src/types/article';

const bookArticleSchema = new Schema<ArticleModel>(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
    category: String,
  },
  { timestamps: true },
);

const BookArticleModel =
  models.Book || model<ArticleModel>('Book', bookArticleSchema);

export default BookArticleModel;
