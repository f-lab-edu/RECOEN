import styled from '@emotion/styled';
import Head from 'src/components/Head';
import ArticleDetailTitle from 'src/components/article/article-detail/ArticleDetailTitle/ArticleDetailTitle';
import { MDXRemote } from 'next-mdx-remote';
import ArticleDetailImg from 'src/components/article/article-detail/ArticleDetailImg';

interface Props {
  children: React.ReactElement[];
}

const TitleWrapper = styled.div`
  margin-top: 200px;
  max-width: 880px;
  width: 100%;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.main`
  max-width: 880px;
  width: 100%;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
`;

const Hr = styled.div`
  width: 100vw;
  margin-top: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid #4a4c55;
  transform: scaleY(0.5);
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailPageContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default DetailPageContainer;

DetailPageContainer.TitleWrapper = TitleWrapper;
DetailPageContainer.ContentWrapper = ContentWrapper;
DetailPageContainer.Head = Head;
DetailPageContainer.Title = ArticleDetailTitle;
DetailPageContainer.Content = MDXRemote;
DetailPageContainer.Hr = Hr;
DetailPageContainer.Thunbnail = ArticleDetailImg;
