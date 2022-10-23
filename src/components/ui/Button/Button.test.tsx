import { render, fireEvent, screen } from '@testing-library/react';
import Button, { Props } from './Button';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

describe('Button', () => {
  const onClick = jest.fn();
  const renderButton = (props: Props) => {
    return render(<Button {...props} />);
  };

  const props = (primary: boolean, disabled: boolean) => {
    return {
      label: '버튼',
      onClick,
      primary,
      disabled,
    };
  };

  describe('label에 넘겨준 글자가', () => {
    it('화면에 보인다', () => {
      const { getByText } = renderButton(props(false, false));
      expect(getByText('버튼')).toBeInTheDocument();
    });
  });

  describe('normal type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #4a4c55이다', () => {
        const { getByText } = renderButton(props(false, false));
        expect(getByText('버튼')).toHaveStyleRule('color', '#4a4c55');
      });
    });

    describe('호버를 하면', () => {
      it('폰트색은 #9599a0이다', () => {
        const { getByText } = renderButton(props(false, false));
        const button = getByText('버튼');
        fireEvent.mouseOver(button);

        // expect(button).toHaveStyleRule('color', '#9599a0');
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(props(false, true));
        // expect(getByText('버튼')).toHaveStyleRule('cursor', 'not-allowed');
      });
    });
  });

  describe('primary type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #ffffff이다', () => {
        const { getByText } = renderButton(props(true, false));
        expect(getByText('버튼')).toHaveStyleRule('color', '#ffffff');
      });

      it('배경색은 #3941FF이다', () => {
        const { getByText } = renderButton(props(true, false));
        expect(getByText('버튼')).toHaveStyleRule('background', '#3941FF');
      });
    });

    describe('호버를 하면', () => {
      it('배경색은 #2B31C7이다', () => {
        const { getByText } = renderButton(props(true, false));
        const button = getByText('버튼');

        fireEvent.mouseOver(button);

        // expect(button).toHaveStyleRule('background', '#2B31C7');
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(props(true, true));
        // expect(getByText('버튼')).toHaveStyleRule('cursor', 'not-allowed');
      });
      it('폰트색은 #9599a0이다', () => {
        const { getByText } = renderButton(props(true, true));
        // expect(getByText('버튼')).toHaveStyleRule('color', '#9599a0');
      });
      it('배경색은 #4a4c55이다', () => {
        const { getByText } = renderButton(props(true, true));
        // expect(getByText('버튼')).toHaveStyleRule('background', '#4a4c55');
      });
    });
  });
});
