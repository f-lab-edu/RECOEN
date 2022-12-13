import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import ProgrammingArticleModel from 'pages/api/models/programmingArticleModel';
import BookArticleModel from 'pages/api/models/bookArticleModel';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await connectMongo();
  const programmingArticleIds = await ProgrammingArticleModel.find().select(
    '_id',
  );
  const bookArticleIds = await BookArticleModel.find().select('_id');
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

  const fields = [...AbsoluteFields, ...programmingFields, ...bookFields];

  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {
  return;
}
