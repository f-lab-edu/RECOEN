import { render, fireEvent, waitFor } from '@testing-library/react';

import Tag, { Props } from './Tag';

describe('Tag', () => {
  const onClick = jest.fn();

  const renderTag = ({ label, deletable }: Props) => {
    return render(<Tag label={label} deletable={deletable} />);
  };

  describe('받아온 텍스트가', () => {
    it('화면에 보인다', () => {
      const { getByText } = renderTag({ label: '태그' });

      expect(getByText('태그')).toBeInTheDocument();
    });
  });

  describe('호버를 하면', () => {
    it('테두리와 글자의 색이 #5C62F3로 변한다', () => {
      const { getByText } = renderTag({ label: '태그' });
      const tag = getByText('태그');

      fireEvent.mouseOver(tag);

      waitFor(() => {
        expect(tag).toHaveStyle('border : solid 1px #5C62F3');
        expect(tag).toHaveStyle('color : solid 1px #5C62F3');
      });
    });
  });

  describe('deletable이 false일 때', () => {
    it('클릭하면 테두리와 글자의 색이 #5C62F3로 변한다', () => {
      const { getByText } = renderTag({ label: '태그' });
      const tag = getByText('태그');

      fireEvent.click(tag);

      expect(tag).toHaveStyle('border : solid 1px #5C62F3');
      expect(tag).toHaveStyle('color : solid 1px #5C62F3');
    });
  });

  describe('deletable이 true일 때', () => {
    it('x버튼이 생긴다', () => {
      const { getByRole } = renderTag({
        label: '태그',
        deletable: {
          isDeletable: true,
          onClick,
        },
      });
      const xButton = getByRole('img');

      expect(xButton).toBeInTheDocument();
    });

    describe('클릭하면', () => {
      it('삭제된다', () => {
        const { getByText } = renderTag({
          label: '태그',
          deletable: {
            isDeletable: true,
            onClick,
          },
        });
        const tag = getByText('태그');

        fireEvent.click(tag);

        expect(onClick).toBeCalled();
      });
    });
  });
});
