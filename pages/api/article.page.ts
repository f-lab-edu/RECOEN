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
      console.log('CREATING ARTICLE');
      const article = await ArticleModel.create(req.body);
      console.log('CREATED ARTICLE');
      res.status(200).json({ article });
    } catch (err) {
      console.log(err);
    }
  })
  .put(async (req, res) => {
    try {
      console.log('UPDATING ARTICLE');
      const body = req.body;
      const id = req.body._id;
      const updateContent = {
        title: body.title,
        content: body.content,
        imgUrl: body.imgUrl,
        description: body.description,
        tags: body.tags,
      };

      const article = await ArticleModel.findOneAndUpdate(
        { _id: id },
        updateContent,
      );
      console.log('UPDATED ARTICLE');
      res.status(200).json({ article });
    } catch (err) {
      console.log(err);
    }
  })
  .delete(async (req, res) => {
    try {
      console.log('DELETING ARTICLE');
      const id = req.body._id;
      const article = await ArticleModel.findByIdAndDelete(id);

      if (!article) return res.status(404);
      console.log('DELETED ARTICLE');

      res.status(200).json({ article });
    } catch (err) {
      console.log(err);
    }
  });
export default handler;
