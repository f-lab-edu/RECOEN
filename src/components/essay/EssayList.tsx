import React from 'react';

import Essay from './Essay';
import styled from '@emotion/styled';

import { ViewArticleElement } from 'src/types/article';
import { useRecoilValue } from 'recoil';
import { filteredArticleStates } from 'src/recoil/article';

interface Props {
  articles: ViewArticleElement[];
}

const ArticleList = ({ articles }: Props) => {
  const filteredArticles = useRecoilValue(filteredArticleStates);
  return (
    <Container>
      <Wrapper>
        {(filteredArticles.length ? filteredArticles : articles).map(
          (article: ViewArticleElement) => {
            if (!article._id) return;
            return (
              <Essay
                key={article._id}
                path={encodeURI(article._id)}
                title={article.title}
                imgUrl={article.imgUrl}
                description={article.description}
                blurDataURL={article.blurDataURL}
                createdAt={article.createdAt}
              />
            );
          },
        )}
      </Wrapper>
    </Container>
  );
};

export default ArticleList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  width: 1200px;

  @media screen and (max-width: 1260px) {
    width: 800px;
  }

  @media screen and (max-width: 767px) {
    width: 380px;
  }
`;
