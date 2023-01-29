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

const ArticleCollectionModel =
  models.ArticleCollection ||
  model<ArticleModelT>('ArticleCollection', articleSchema);

export default ArticleCollectionModel;

articleSchema.index({ category: 1, createdAt: -1 }); // schema level
