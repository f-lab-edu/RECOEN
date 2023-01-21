import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { QuoteT } from './QuoteCarousel/QuoteCarousel';
import { theme } from 'src/style/theme';

interface QuoteProps {
  quote: QuoteT;
  isActive: boolean;
}

const Quote = ({ quote, isActive }: QuoteProps) => {
  return (
    <QuoteBox isActive={isActive}>
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

export default Quote;

const inAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95)
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: scale(1)
  }
`;
const outAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const QuoteBox = styled.article<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  animation: ${({ isActive }) => (isActive ? inAnimation : outAnimation)} 1.1s
    ease;
`;

const UpperWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EnglishQuote = styled.blockquote`
  font-size: 3rem;
  text-align: right;
  margin-right: 0;
  margin-left: 0;
  padding: 0;
  color: ${theme.color.gray100};
  white-space: pre-line;
  font-family: 'PT Serif', serif;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EnglishParagraph = styled.p`
  margin: 0;
`;

const EnglishCite = styled.cite`
  text-align: right;
  color: ${theme.color.gray100};
  font-size: 1rem;
  font-family: 'PT Serif', serif;
  font-style: none;
`;

const DownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const KoreanQuote = styled.blockquote`
  margin: 0;
  color: ${theme.color.gray100};
  display: inline;
  white-space: pre-line;
  position: relative;

  :before {
    content: '';
    background-color: ${theme.color.gray100};
    width: 50px;
    height: 1px;
    position: absolute;
    right: 0;
    left: 0;
  }
`;

const KoreanParagraph = styled.p`
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
