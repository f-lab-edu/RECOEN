import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { connectMongo } from 'src/utils/connectMongo';
import { Article } from 'src/components/molecules';
import ArticleModel from 'src/models/articleModel';

const Home: NextPage = ({
  articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

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
