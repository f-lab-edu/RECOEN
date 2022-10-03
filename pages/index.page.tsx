import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { QuoteSlider } from 'src/components';

const Home: NextPage = ({
  quotesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(quotesData.quotes);
  return <QuoteSlider />;
};

export default Home;

import fsPromises from 'fs/promises';
import path from 'path';

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), '__data__/quotes.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const quotesData = JSON.parse(jsonData);

  return {
    props: { quotesData },
  };
};
