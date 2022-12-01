import { Schema, model, models } from 'mongoose';

const codingArticleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
  },
  { timestamps: true },
);

const CodingArticleModel =
  models.Coding || model('Coding', codingArticleSchema);

export default CodingArticleModel;
