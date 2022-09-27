import { connectMongo } from 'pages/api/middlewares/connectMongo';
import nc from 'next-connect';
import ArticleModel from 'pages/api/models/articleModel';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(400).json({ result: false, message: 'Sorry!' });
  },
  onNoMatch(req, res) {
    res.status(404).json({ result: false, message: 'Not Mached Method!' });
  },
});

handler
  .use(async (req, _, next) => {
    await connectMongo();
    await next();
  })
  .post(async (req, res) => {
    try {
      console.log('CREATING DOCUMENT');
      const article = await ArticleModel.create(req.body);
      console.log('CREATED DOCUMENT');
      res.status(200).json({ article });
    } catch (err) {
      console.log(err);
    }
  });

export default handler;
