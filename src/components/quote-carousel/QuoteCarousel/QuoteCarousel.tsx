import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import Quote from '../Quote';
import ProgressBox from '../ProgressBox';
import { useViewportWidth } from 'src/hooks';

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
  const viewportWidth = useViewportWidth();

  console.log(viewportWidth);

  const SLIDE_BOX_WIDTH = viewportWidth * TOTAL_SLIDES;

  useEffect(() => {
    if (!slideRef.current) return;

    const moveX = viewportWidth * currentSlide;
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
      <ProgressBox
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
      />
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const QuotesBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
    width: 100%;
  }
`;

const SlideBox = styled.div<StyleProps>`
  display: flex;
  width: ${(props) => props.slideBoxWidth}px;
`;
