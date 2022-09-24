import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  description: String,
  content: String,
});

const ArticleModel = models.Article || model('Article', articleSchema);

export default ArticleModel;
