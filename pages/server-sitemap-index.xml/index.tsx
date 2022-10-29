import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import ArticleModel from 'pages/api/models/articleModel';
import { connectMongo } from 'pages/api/middlewares/connectMongo';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await connectMongo();
  const articleIds = await ArticleModel.find().select('_id');
  const lastmod = new Date().toISOString();

  const AbsoluteFields = [
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      changefreq: 'daily',
      lastmod,
      priority: 0.7,
    },
  ];

  const articleFields = articleIds.map((articleId) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}article/${articleId._id}`,
    priority: 1.0,
    lastmod,
  }));

  const fields = [...AbsoluteFields, ...articleFields];

  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {
  return;
}
