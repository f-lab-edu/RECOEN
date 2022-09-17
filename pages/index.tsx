import type { NextPage } from 'next';

const Home: NextPage = () => {
  const createArticle = async () => {
    const res = await fetch('api/article/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: '이것이 바로 콘텐츠',
      }),
    });

    const data = await res.json();
    console.log(data);
  };
  return <button onClick={createArticle}>생성하기</button>;
};

export default Home;
