import { render, fireEvent, waitFor } from '@testing-library/react';
import Button, { Props } from './Button';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

describe('Button', () => {
  const renderButton = (props: Props) => {
    return render(<Button {...props} />);
  };
  const onClick = jest.fn();

  const buttonProps = (buttonType: 'primary' | 'normal') => {
    return (isActive: 'active' | 'deactivate') => {
      return {
        label: '버튼',
        onClick,
        primary: buttonType === 'primary' ? true : false,
        disabled: isActive === 'active' ? false : true,
      };
    };
  };

  describe('label에 넘겨준 글자가', () => {
    it('화면에 보인다', () => {
      const { getByText } = renderButton(buttonProps('normal')('active'));
      expect(getByText('버튼')).toBeInTheDocument();
    });
  });

  describe('normal type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #4a4c55이다', () => {
        const { getByText } = renderButton(buttonProps('normal')('active'));
        expect(getByText('버튼')).toHaveStyleRule('color', '#9599a0');
      });
    });

    describe('호버를 하면', () => {
      it('폰트색은 #9599a0이다', () => {
        const { getByText } = renderButton(buttonProps('normal')('active'));
        const button = getByText('버튼');
        fireEvent.mouseEnter(button);

        waitFor(() => expect(button).toHaveStyle('color : #9599a0'));
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(buttonProps('normal')('deactivate'));
        expect(getByText('버튼')).toHaveStyle('cursor : not-allowed');
      });
    });
  });

  describe('primary type에서', () => {
    describe('가만히 있으면', () => {
      it('폰트색은 #ffffff이다', () => {
        const { getByText } = renderButton(buttonProps('primary')('active'));
        expect(getByText('버튼')).toHaveStyle('color : #ffffff');
      });

      it('배경색은 #5C62F3이다', () => {
        const { getByText } = renderButton(buttonProps('primary')('active'));
        expect(getByText('버튼')).toHaveStyle('background : #5C62F3');
      });
    });

    describe('호버를 하면', () => {
      it('배경색은 #2B31C7이다', () => {
        const { getByText } = renderButton(buttonProps('primary')('active'));
        const button = getByText('버튼');

        fireEvent.mouseOver(button);

        waitFor(() => expect(button).toHaveStyle('background : #2B31C7'));
      });
    });

    describe('disable 상태이면', () => {
      it('cursor가 not-allowed처리된다', () => {
        const { getByText } = renderButton(
          buttonProps('primary')('deactivate'),
        );
        expect(getByText('버튼')).toHaveStyle('cursor : not-allowed');
      });
      it('폰트색은 #9599a0이다', () => {
        const { getByText } = renderButton(
          buttonProps('primary')('deactivate'),
        );
        expect(getByText('버튼')).toHaveStyle('color : #9599a0');
      });
      it('배경색은 #4a4c55이다', () => {
        const { getByText } = renderButton(
          buttonProps('primary')('deactivate'),
        );
        expect(getByText('버튼')).toHaveStyle('background : #4a4c55');
      });
    });
  });
});
