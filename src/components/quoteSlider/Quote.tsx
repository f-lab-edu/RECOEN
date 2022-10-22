import React from 'react';
import styled from '@emotion/styled';
import { QuoteT } from './';

interface QuoteProps {
  quote: QuoteT;
}

export const Quote = ({ quote }: QuoteProps) => {
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
  width: 1024px;
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
  width: 1024px;
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
