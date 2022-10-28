import { render, fireEvent, waitFor } from '@testing-library/react';

import Chip, { Props } from './Chip';

describe('Chip', () => {
  const onClick = jest.fn();

  const renderChip = ({ label, deletable, readOnly, onClick }: Props) => {
    return render(
      <Chip
        label={label}
        deletable={deletable}
        readOnly={readOnly}
        onClick={onClick}
      />,
    );
  };

  describe('받아온 텍스트가', () => {
    it('화면에 보인다', () => {
      const { getByText } = renderChip({ label: '태그' });

      expect(getByText('태그')).toBeInTheDocument();
    });
  });

  describe('호버를 하면', () => {
    it('테두리와 글자의 색이 #5C62F3로 변한다', () => {
      const { getByText } = renderChip({ label: '태그' });
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
      const { getByText } = renderChip({ label: '태그' });
      const tag = getByText('태그');

      fireEvent.click(tag);

      waitFor(() => {
        expect(tag).toHaveStyle('border : solid 1px #5C62F3');
        expect(tag).toHaveStyle('color : solid 1px #5C62F3');
      });
    });
  });

  describe('deletable이 true일 때', () => {
    it('x버튼이 생긴다', () => {
      const { getByRole } = renderChip({
        label: '태그',
        deletable: true,
        onClick,
      });
      const xButton = getByRole('img');

      expect(xButton).toBeInTheDocument();
    });

    describe('클릭하면', () => {
      it('삭제된다', () => {
        const { getByText } = renderChip({
          label: '태그',
          deletable: true,
          onClick,
        });
        const tag = getByText('태그');

        fireEvent.click(tag);

        expect(onClick).toBeCalled();
      });
    });
  });

  describe('readOnly 상태이면', () => {
    it('hover했을 때 border색이 변경되지 않는다', () => {
      const { getByText } = renderChip({
        label: '태그',
        readOnly: true,
        onClick,
      });

      const chip = getByText('태그');

      expect(chip).toHaveStyle('border: 1px solid #32363d');

      fireEvent.mouseOver(chip);

      waitFor(() => {
        expect(chip).toHaveStyle('border: 1px solid #32363d');
      });
    });
    it('글자색이 #5C62F3로 바뀐다', () => {
      const { getByText } = renderChip({
        label: '태그',
        readOnly: true,
        onClick,
      });

      const chip = getByText('태그');
      expect(chip).toHaveStyle('color: #5c62f3');
    });
  });
});
