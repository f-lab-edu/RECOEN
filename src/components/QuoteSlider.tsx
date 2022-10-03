import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import LeftArrow from '../../public/leftArrow.png';
import RigthArrow from '../../public/rightArrow.png';

type QuoteT = {
  englishQuote: string;
  englishCite: string;
  koreanQuote: string;
  koreanCite: string;
};
interface Props {
  quotes: QuoteT[];
}

export const QuoteSlider = ({ quotes }: Props) => {
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentLineWidth, setCurrentLineWidth] = useState<number>(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const progressBarWidth = node.getBoundingClientRect().width;
      setCurrentLineWidth(progressBarWidth / quotes.length);
    }
  }, []);

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
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      const moveX = 1200 * currentSlide;
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${moveX}px)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    }
  }, [currentSlide]);

  return (
    <Container>
      <QuotesBox>
        {quotes.map((quote) => {
          return <Quote key={quote.englishQuote} quote={quote} />;
        })}
      </QuotesBox>
      <ProgressBox>
        <LineWrapper>
          <ProgressLine ref={measuredRef}>
            <CurrentLine currentLineWidth={currentLineWidth} />
          </ProgressLine>
        </LineWrapper>
        <StyleImage src={LeftArrow} width="50" height="50" alt="Left Arrow" />
        <StyleImage src={RigthArrow} width="50" height="50" alt="Rigth Arrow" />
      </ProgressBox>
    </Container>
  );
};

interface StyleProps {
  currentLineWidth: number;
}

const Container = styled.div`
  width: 100%;
  height: 90%;
`;

const QuotesBox = styled.section`
  display: flex;
`;

const ProgressBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  box-sizing: content-box;
  height: 44.92px;
`;

const LineWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressLine = styled.div`
  height: 0.3px;
  width: 100%;
  border: 0.3px solid #494c56;
  position: relative;
`;

const CurrentLine = styled.hr<StyleProps>`
  height: 0.1px;
  width: ${(props) => props.currentLineWidth}px;
  border: 0.1px solid #9499a1;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  transition: 0.1s ease-in-out;
`;

const StyleImage = styled(Image)`
  cursor: pointer;
  :hover {
    /* transition: 0.1s ease-in-out; */
    opacity: 0.5;
  }
`;

interface QuoteProps {
  quote: QuoteT;
}

const Quote = ({ quote }: QuoteProps) => {
  return (
    <QuoteBox>
      <UpperWrapper>
        <EnglishQuote>
          <EnglishParagraph>{quote.englishQuote}</EnglishParagraph>
        </EnglishQuote>
        <EnglishCite>{quote.englishCite}</EnglishCite>
      </UpperWrapper>
      <DownWrapper>
        <KoreanQuote>
          <KoreanParagraph>{quote.koreanQuote}</KoreanParagraph>
        </KoreanQuote>
        <KoreanCite>{quote.koreanCite}</KoreanCite>
      </DownWrapper>
    </QuoteBox>
  );
};

const QuoteBox = styled.article``;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 50px;
`;

const EnglishQuote = styled.blockquote`
  font-size: 60px;
  text-align: right;
  margin-right: 0;
  margin-left: 0;
  padding: 0;
  color: #9499a1;
  white-space: pre;
`;

const EnglishParagraph = styled.p`
  margin: 0;
`;

const EnglishCite = styled.cite`
  text-align: right;
  color: #9499a1;
`;

const DownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const KoreanQuote = styled.blockquote`
  margin: 0;
  color: #494c56;
  display: inline;
  border-top: 1px solid #494c56;
  white-space: pre;
`;

const KoreanParagraph = styled.p``;

const KoreanCite = styled.cite`
  color: #494c56;
`;
