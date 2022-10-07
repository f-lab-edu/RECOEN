import React, { useState, useRef, useEffect } from 'react';
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
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = quotes.length - 1;
  const SLIDE_BOX_WIDTH = 1200 * TOTAL_SLIDES;

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
      slideRef.current.style.transform = `translateX(-${moveX}px)`;
    }
  }, [currentSlide]);

  return (
    <Container>
      <QuotesBox>
        <SlideBox ref={slideRef} slideBoxWidth={SLIDE_BOX_WIDTH}>
          {quotes.map((quote) => {
            return <Quote key={quote.englishQuote} quote={quote} />;
          })}
        </SlideBox>
      </QuotesBox>
      <ProgressBox>
        <NumBox>
          <CurrentNum>0{currentSlide + 1}</CurrentNum>
          <StyledHyphen />
          <TotalNum>0{TOTAL_SLIDES + 1}</TotalNum>
        </NumBox>
        <StyleImage
          onClick={PrevSlide}
          src={LeftArrow}
          width={50}
          height={50}
          alt="Left Arrow"
        />
        <StyleImage
          onClick={NextSlide}
          src={RigthArrow}
          width={50}
          height={50}
          alt="Rigth Arrow"
        />
      </ProgressBox>
    </Container>
  );
};

interface StyleProps {
  currentLineWidth?: number;
  slideBoxWidth?: number;
  currentLinePos?: number;
}

const Container = styled.div`
  width: 1200px;
  height: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const QuotesBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const SlideBox = styled.div<StyleProps>`
  display: flex;
  width: ${(props) => props.slideBoxWidth}px;
`;

const ProgressBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  box-sizing: content-box;
  height: 50px;
  width: 100%;
`;

const NumBox = styled.div`
  display: flex;
  align-items: center;
`;

const TotalNum = styled.div`
  color: #494c56;
  font-size: 20px;
`;

const StyledHyphen = styled.div`
  height: 0.5px;
  width: 20px;
  background-color: #494c56;
  margin: 5px;
`;

const CurrentNum = styled.div`
  color: #9499a1;
  font-size: 20px;
`;

const StyleImage = styled(Image)`
  cursor: pointer;
  :hover {
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
      </DownWrapper>
    </QuoteBox>
  );
};

const QuoteBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpperWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 80px;
`;

const EnglishQuote = styled.blockquote`
  font-size: 46px;
  text-align: right;
  margin-right: 0;
  margin-left: 0;
  padding: 0;
  color: #9499a1;
  white-space: pre;
  font-family: 'PT Serif', serif;
`;

const EnglishParagraph = styled.p`
  margin: 0;
`;

const EnglishCite = styled.cite`
  text-align: right;
  color: #9499a1;
  font-size: 18px;
  font-family: 'PT Serif', serif;
  font-style: none;
`;

const DownWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const KoreanQuote = styled.blockquote`
  margin: 0;
  color: #494c56;
  display: inline;
  white-space: pre;
  position: relative;
  :before {
    content: '';
    background-color: #494c56;
    width: 50px;
    height: 1px;
    position: absolute;
    right: 0;
    left: 0;
  }
`;

const KoreanParagraph = styled.p``;
