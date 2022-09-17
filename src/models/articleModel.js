import { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  content: String,
});

const Article = models.Article || model('Article', articleSchema);

export default Article;
