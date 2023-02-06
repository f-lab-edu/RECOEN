import styled from '@emotion/styled';
import Image from 'next/image';
import { ViewArticleElement } from 'src/types/article';

interface Props {
  article: ViewArticleElement;
}

const ArticleDetailImg = ({ article }: Props) => {
  return (
    <ImageWrapper>
      <Image
        src={article.imgUrl}
        alt="Hero Image"
        blurDataURL={article.blurDataURL}
        fill
        style={{ objectFit: 'cover', objectPosition: 'top top' }}
      />
    </ImageWrapper>
  );
};

export default ArticleDetailImg;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  position: relative;
`;
