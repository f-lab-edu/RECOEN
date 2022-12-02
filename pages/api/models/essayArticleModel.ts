import { Schema, model, models } from 'mongoose';

const essayArticleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
  },
  { timestamps: true },
);

const EssayArticleModel = models.Essay || model('Essay', essayArticleSchema);

export default EssayArticleModel;
