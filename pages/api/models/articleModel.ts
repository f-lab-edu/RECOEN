import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  content: String,
  imgUrl: String,
  blurDataURL: String,
});

const ArticleModel = models.Article || model('Article', articleSchema);

export default ArticleModel;
