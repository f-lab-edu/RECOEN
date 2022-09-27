import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  description: String,
  hashtag: String,
  content: String,
  imgUrl: String,
});

const ArticleModel = models.Article || model('Article', articleSchema);

export default ArticleModel;
