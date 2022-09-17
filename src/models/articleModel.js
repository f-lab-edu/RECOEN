import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  title: String,
  description: String,
  content: String,
});

const Article = models.Article || model('Article', articleSchema);

export default Article;
