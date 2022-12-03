import { Model } from 'mongoose';
import { ArticleModel } from 'src/types/article';

import { ViewArticleElement } from 'src/types/article';
import { getPlaiceholder } from 'plaiceholder';

import { connectMongo } from 'pages/api/middlewares/connectMongo';

export default class DBUtils {
  model: Model<ArticleModel>;
  constructor(model: Model<ArticleModel>) {
    this.model = model;
  }

  async setUp() {
    console.log('CONNECTING TO MONGO IN ARTICLE PAGE');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN ARTICLE PAGE');
  }

  async findArticleWithBluredURL() {
    console.log('FETCHING DATA IN ARTICLE PAGE');
    const res = await this.model.find();
    console.log(res);
    console.log('FETCHED DATA IN ARTICLE PAGE');

    const articles = JSON.parse(JSON.stringify(res));

    const articlesWithBlurURL = await Promise.all(
      articles.map(async (article: ViewArticleElement) => {
        const { base64 } = await getPlaiceholder(article.imgUrl);
        return { ...article, blurDataURL: base64 };
      }),
    );

    return articlesWithBlurURL;
  }
}
