import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import ArticleCollectionModel from 'pages/api/models/articleCollectionModel';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await connectMongo();

  const programmingArticleIds = await ArticleCollectionModel.find({
    category: 'programming',
  }).select('_id');

  const bookArticleIds = await ArticleCollectionModel.find({
    category: 'book',
  }).select('_id');

  const EssayArticleIds = await ArticleCollectionModel.find({
    category: 'essay',
  }).select('_id');

  const lastmod = new Date().toISOString();

  const AbsoluteFields = [
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      changefreq: 'daily',
      lastmod,
      priority: 0.7,
    },
  ];

  const programmingFields = programmingArticleIds.map((articleId) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}programming/${articleId._id}`,
    priority: 1.0,
    lastmod,
  }));

  const bookFields = bookArticleIds.map((articleId) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}book/${articleId._id}`,
    priority: 1.0,
    lastmod,
  }));

  const essayFields = EssayArticleIds.map((articleId) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}essay/${articleId._id}`,
    priority: 1.0,
    lastmod,
  }));

  const fields = [
    ...AbsoluteFields,
    ...programmingFields,
    ...bookFields,
    ...essayFields,
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {
  return;
}
