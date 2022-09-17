import { connectMongo } from 'src/utils/connectMongo';
import Article from 'src/models/articleModel';

export default async function createArticle(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const article = await Article.create(req.body);
    console.log('CREATED DOCUMENT');
    res.status(200).json({ article });
  } catch (error) {
    console.log(error);
  }
}
