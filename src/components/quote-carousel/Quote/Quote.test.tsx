import { render } from '@testing-library/react';
import Quote from './Quote';

interface Props {
  isActive: boolean;
}

const quote = {
  englishQuote: 'First, solve the problem.\n Then, write the code.',
  englishCite: '- John Johnson',
  koreanQuote: '먼저, 문제를 해결하라.\n 그 다음, 코드를 작성하라.',
  koreanCite: '- 존 존슨',
};

describe('Quote', () => {
  const renderQuote = ({ isActive }: Props) =>
    render(<Quote quote={quote} isActive={isActive} />);

  context('isActive이면', () => {
    it('QuoteBox에 inAnimation이 적용된다', () => {
      const { getByTestId } = renderQuote({ isActive: true });

      expect(getByTestId('quote-box')).toHaveStyle(
        'animation : animation-1cp6cvm 1.1s ease',
      );
    });
  });

  context('isActive이 아니면', () => {
    it('QuoteBox에 outAnimation이 적용된다', () => {
      const { getByTestId } = renderQuote({ isActive: false });

      expect(getByTestId('quote-box')).toHaveStyle(
        'animation : animation-1ldlod2 1.1s ease',
      );
    });
  });
});
