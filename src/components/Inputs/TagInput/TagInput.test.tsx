import { render, fireEvent } from '@testing-library/react';
import TagInput from './TagInput';
import { matchers } from '@emotion/jest';
import { RecoilObserver } from 'src/utils';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';

import { useArticleElement } from 'src/hooks';

expect.extend(matchers);

describe('TagInput', () => {
  const onChange = jest.fn();
  const renderTagInput = () =>
    render(
      <RecoilRoot>
        <RecoilObserver node={articleState} onChange={onChange} />
        <TagInput useArticleElement={useArticleElement} />
      </RecoilRoot>,
    );

  const expectedState = (tags: string[]) => {
    return {
      content: '',
      description: '',
      imgUrl: '',
      tags,
      title: '',
      createdAt: '',
      category: 'programming',
    };
  };

  it('render correctly', () => {
    renderTagInput();
  });

  context('태그를 입력하면', () => {
    it('태그가 화면에 보인다.', () => {
      const { getByRole } = renderTagInput();

      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });
      fireEvent.compositionStart(input, { key: 'Enter' });
      fireEvent.compositionEnd(input, { key: 'Enter' });

      expect(onChange).toHaveBeenNthCalledWith(3, expectedState(['태그']));
    });
  });

  context('태그를 클릭하면', () => {
    it('태그가 지워진다.', () => {
      const { getByRole, getByText } = renderTagInput();
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(onChange).toHaveBeenNthCalledWith(3, expectedState(['태그']));

      const tag = getByText('태그');

      fireEvent.click(tag);

      expect(tag).not.toBeInTheDocument();
    });
  });

  context('태그가 3개 이상일 때 입력하면', () => {
    it('인풋의 아웃라인 스타일이 빨간색으로 변한다', async () => {
      const { getByRole } = renderTagInput();
      const input = getByRole('textbox');

      ['태그1', '태그2', '태그3'].forEach((value) => {
        fireEvent.change(input, {
          target: { value },
        });
        fireEvent.keyDown(input, { key: 'Enter' });
      });

      expect(onChange).toHaveBeenNthCalledWith(
        10,
        expectedState(['태그1', '태그2', '태그3']),
      );

      expect(input).toHaveStyleRule('border', '1px solid #3c3e44');

      fireEvent.keyDown(input, { key: 'Enter' });

      expect(input).toHaveStyleRule('border', '1px solid #c4001d');
    });
  });

  context('인풋에서 Backspace를 입력하면', () => {
    it('태그가 지워진다', () => {
      const { getByRole, queryByText } = renderTagInput();
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(queryByText('태그')).toBeInTheDocument();

      const backspaceOptions = {
        key: 'Backspace',
        keyCode: 8,
        charCode: 8,
      };
      fireEvent.keyDown(input, backspaceOptions);

      expect(queryByText('태그')).not.toBeInTheDocument();
    });
  });

  context('동일한 태그를 입력하면', () => {
    it('입력이 되지 않는다', () => {
      const { getByRole, getAllByText } = renderTagInput();
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getAllByText(/태그/)).toHaveLength(1);

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getAllByText(/태그/)).toHaveLength(1);
    });
  });

  context('태그인풋에 blur 이벤트가 발생하면', () => {
    it('에러 라인이 사라진다', async () => {
      const { getByRole } = renderTagInput();
      const input = getByRole('textbox');

      ['태그1', '태그2', '태그3'].forEach((value) => {
        fireEvent.change(input, {
          target: { value },
        });
        fireEvent.keyDown(input, { key: 'Enter' });
      });

      fireEvent.keyDown(input, { key: 'Enter' });

      expect(input).toHaveStyleRule('border', '1px solid #c4001d');

      fireEvent.blur(input);

      expect(input).toHaveStyleRule('border', '1px solid #3c3e44');
    });
  });

  context('빈 값을 입력하고 엔터를 누르면', () => {
    it('태그가 추가되지 않는다', () => {
      const { getByRole, getAllByText } = renderTagInput();
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '태그' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getAllByText(/태그/)).toHaveLength(1);

      fireEvent.change(input, { target: { value: '' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getAllByText(/태그/)).toHaveLength(1);
    });
  });
});
