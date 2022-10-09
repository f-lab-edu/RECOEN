import { render, screen, fireEvent, within } from '@testing-library/react';
import { QuoteSlider } from 'src/components';

const quotesData = [
  {
    englishQuote: 'First, solve the problem.\n Then, write the code.',
    englishCite: '- John Johnson',
    koreanQuote: '먼저, 문제를 해결하라.\n 그 다음, 코드를 작성하라.',
    koreanCite: '- 존 존슨',
  },
  {
    englishQuote:
      'Any fool can write code that \n a computer can understand.\nGood programmers write code that \nhumans can understand.',
    englishCite: '- Martin Fowler',
    koreanQuote:
      '어떤 바보도 컴퓨터가 이해하는 코드를 작성할 수 있다.\n하지만 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성한다.',
    koreanCite: '- 마틴 파울러',
  },
  {
    englishQuote:
      'Code is like humor.\n When you have to explain it, it’s bad.',
    englishCite: '- Cory House',
    koreanQuote: '코드는 유머와 같다.\n설명해야한다면, 별로라는 말이다.',
    koreanCite: '- 코리 하우스',
  },
];

describe('QuoteSlider', () => {
  const renderQuoteSlider = () => render(<QuoteSlider quotes={quotesData} />);
  describe('render', () => {
    it('should render correctly', () => {
      renderQuoteSlider();
      quotesData.forEach(({englishCite}) => {
        expect(screen.getByText(englishCite)).toBeInTheDocument();
      })
    });
  });

  describe('버튼을 클릭하면', () => {
    it('slide가 움직여야 한다.', () => {
      renderQuoteSlider();
      const nextSlideButton = screen.getByTestId('nextSlideButton');
      const { getByText } = within(screen.getByTestId('currentNum'));

      expect(getByText('01')).toBeInTheDocument();
      expect(nextSlideButton).toBeInTheDocument();

      fireEvent.click(nextSlideButton);

      expect(getByText('02')).toBeInTheDocument();
    });
  });
});
