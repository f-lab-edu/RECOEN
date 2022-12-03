import { Schema, model, models } from 'mongoose';
import { ArticleModel } from 'src/types/article';

const essayArticleSchema = new Schema<ArticleModel>(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
  },
  { timestamps: true },
);

const EssayArticleModel =
  models.Essay || model<ArticleModel>('Essay', essayArticleSchema);

export default EssayArticleModel;
