import { useState } from 'react';
import styled from '@emotion/styled';

import Quote from '../Quote';
import ProgressBox from '../ProgressBox';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = quotes.length - 1;

  return (
    <Container>
      <QuotesBox>
        {quotes.map((quote, index) => {
          return (
            <>
              {currentSlide == index && (
                <Quote
                  key={quote.englishQuote}
                  quote={quote}
                  isActive={currentSlide == index}
                />
              )}
            </>
          );
        })}
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

const Container = styled.div`
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 860px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const QuotesBox = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
    width: 100%;
  }
`;
