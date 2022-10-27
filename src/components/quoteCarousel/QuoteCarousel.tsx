import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import LeftArrow from '../../../public/leftArrow.png';
import RigthArrow from '../../../public/rightArrow.png';
import Quote from './Quote';

export type QuoteT = {
  englishQuote: string;
  englishCite: string;
  koreanQuote: string;
  koreanCite: string;
};
interface Props {
  quotes: QuoteT[];
}

const QuoteCarousel = ({ quotes }: Props) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = quotes.length - 1;
  const SLIDE_BOX_WIDTH = 1200 * TOTAL_SLIDES;

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) return;
    setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    if (!slideRef.current) return;

    const moveX = 1200 * currentSlide;
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${moveX}px)`;
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
          <CurrentNum data-testid="currentNum">0{currentSlide + 1}</CurrentNum>
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
          data-testid="nextSlideButton"
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

export default QuoteCarousel;

interface StyleProps {
  currentLineWidth?: number;
  slideBoxWidth?: number;
  currentLinePos?: number;
}

const Container = styled.div`
  width: 1200px;
  height: 100%;
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
