import { Schema, model, models } from 'mongoose';

const programmingArticleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    content: String,
    imgUrl: String,
  },
  { timestamps: true },
);

const ProgrammingArticleModel =
  models.Programming || model('Programming', programmingArticleSchema);

export default ProgrammingArticleModel;
