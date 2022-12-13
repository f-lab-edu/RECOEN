import { Schema, model, models } from 'mongoose';
import { ArticleModel } from 'src/types/article';

const programmingArticleSchema = new Schema<ArticleModel>(
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

const ProgrammingArticleModel =
  models.Programming ||
  model<ArticleModel>('Programming', programmingArticleSchema);

export default ProgrammingArticleModel;
