import { Schema, model, models } from 'mongoose';
import { ArticleModel as ArticleModelT } from 'src/types/article';

const articleSchema = new Schema<ArticleModelT>(
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

const ArticleModel =
  models.Article || model<ArticleModelT>('article', articleSchema);

export default ArticleModel;
