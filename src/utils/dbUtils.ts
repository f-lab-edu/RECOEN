import { Model } from 'mongoose';
import { ArticleModel } from 'src/types/article';

import { ViewArticleElement } from 'src/types/article';
import { getPlaiceholder } from 'plaiceholder';

import { connectMongo } from 'pages/api/middlewares/connectMongo';
import { serialize } from 'next-mdx-remote/serialize';

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

  async find(category: string) {
    console.log('FETCHING DATA IN ARTICLE PAGE');
    const res = await this.model
      .find({ category })
      .sort({ createdAt: -1 })
      .hint({ category: 1, createdAt: -1 });
    console.log('FETCHED DATA IN ARTICLE PAGE');

    return JSON.parse(JSON.stringify(res));
  }

  async findById(id: string) {
    const res = await this.model.findById(id);

    return JSON.parse(JSON.stringify(res));
  }

  async findArticleWithBluredURL(category: string) {
    const articles = await this.find(category);

    const articlesWithBlurURL = await Promise.all(
      articles.map(async (article: ViewArticleElement) => {
        const { base64 } = await getPlaiceholder(article.imgUrl);
        return { ...article, blurDataURL: base64 };
      }),
    );

    return articlesWithBlurURL;
  }

  async findArticlePaths(category: string) {
    const articles = await this.find(category);

    const paths = articles.map((article: ViewArticleElement) => {
      if (article._id) return { params: { id: article._id.toString() } };
    });

    return paths;
  }

  async getMDXContent(id: string) {
    const article = await this.findById(id);
    const { base64 } = await getPlaiceholder(article.imgUrl);
    const MDXcontent = await serialize(article.content);

    return { ...article, blurDataURL: base64, MDXcontent };
  }
}
