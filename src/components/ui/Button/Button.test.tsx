import { render, fireEvent } from '@testing-library/react';
import Button, { Props } from './Button';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

describe('Button', () => {
  const onClick = jest.fn();
  const renderButton = (props: Props) => {
    return render(<Button {...props} />);
  };

  const propsWithPrimary = (primary: boolean) => {
    return {
      label: '버튼',
      primary,
      onClick,
    };
  };

  describe('label에 넘겨준 글자가', () => {
    it('화면에 보인다', () => {
      const { getByText } = renderButton(propsWithPrimary(false));
      expect(getByText('버튼')).toBeInTheDocument();
    });
  });

  describe('normal type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #4a4c55이다', () => {
        const { getByText } = renderButton(propsWithPrimary(false));
        expect(getByText('버튼')).toHaveStyleRule('color', '#4a4c55');
      });
    });

    describe('호버를 하면', () => {
      it('폰트색은 #9599a0이다', () => {
        const { getByText } = renderButton(propsWithPrimary(false));
        expect(getByText('버튼')).toHaveStyleRule('color', '#9599a0');
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(propsWithPrimary(true));
        expect(getByText('버튼')).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
  });

  describe('primary type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #ffffff이다', () => {
        const { getByText } = renderButton(propsWithPrimary(true));
        expect(getByText('버튼')).toHaveStyleRule('color', '#ffffff');
      });

      it('배경색은 #3941FF이다', () => {
        const { getByText } = renderButton(propsWithPrimary(true));
        expect(getByText('버튼')).toHaveStyleRule('background', '#3941FF');
      });
    });

    describe('호버를 하면', () => {
      it('배경색은 #4E75FF이다', () => {
        const { getByText } = renderButton(propsWithPrimary(true));
        const button = getByText('버튼');

        fireEvent.mouseOver(button);

        expect(button).toHaveStyleRule('background', '#4E75FF');
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(propsWithPrimary(true));
        expect(getByText('버튼')).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
  });
});
