import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { connectMongo } from 'pages/api/middlewares/connectMongo';
import { Article } from 'src/components/molecules';
import ArticleModel from 'pages/api/models/articleModel';

const Home: NextPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {articles.map((article: any) => (
        <Article
          key={article._id}
          path={encodeURI(article._id)}
          title={article.title}
          description={article.description}
        />
      ))}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('CONNECTING TO MONGO IN MAIN');
    await connectMongo();
    console.log('CONNECTED TO MONGO IN MAIN');

    console.log('FETCHING DATA');
    const articles = await ArticleModel.find();
    console.log('FETCHED DATA');

    return {
      props: {
        articles: JSON.parse(JSON.stringify(articles)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
