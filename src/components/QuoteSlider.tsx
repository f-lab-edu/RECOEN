import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

export const QuoteSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const TOTAL_SLIDES = 2;
  const SLIDE_BOX_WIDTH = 420 * (TOTAL_SLIDES + 1);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      return; // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      const moveX = 420 * currentSlide;
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${moveX}px)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    }
  }, [currentSlide]);

  return (
    <Container>
      <QuotesBox>
        <Quote />
      </QuotesBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90%;
`;

const QuotesBox = styled.section``;

interface QuoteProps {
  englishVersion: string;
  englishCite: string;
  koreanVersion: string;
  koreanCite: string;
}

const Quote = ({
  englishVersion,
  englishCite,
  koreanVersion,
  koreanCite,
}: QuoteProps) => {
  return (
    <QuoteBox>
      <UpperWrapper>
        <EnglishQuote>
          <EnglishParagraph>
            Any fool can write code that <br /> a computer can understand.{' '}
            <br />
            Good programmers write code that <br /> humans can understand.
          </EnglishParagraph>
        </EnglishQuote>
        <EnglishCite>- Martin Fowler</EnglishCite>
      </UpperWrapper>
      <KoreanQuote>
        <KoreanParagraph>
          어떤 바보도 컴퓨터가 이해하는 코드를 작성할 수 있다.
          <br /> 하지만 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성한다.
        </KoreanParagraph>
      </KoreanQuote>
      <KoreanCite></KoreanCite>
    </QuoteBox>
  );
};

const QuoteBox = styled.article``;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EnglishQuote = styled.blockquote`
  font-size: 64px;
  text-align: right;
  margin-right: 0;
  margin-left: 0;
  padding: 0;
`;

const EnglishParagraph = styled.p`
  margin: 0;
`;

const EnglishCite = styled.cite`
  text-align: right;
`;

const KoreanQuote = styled.blockquote`
  color: #494c56;
  display: inline;
  border-top: 1px solid #494c56;
`;

const KoreanParagraph = styled.p``;

const KoreanCite = styled.cite``;
