import { render, fireEvent, within, screen } from '@testing-library/react';
import TitleInput from './TitleInput';
import { matchers } from '@emotion/jest';
import { RecoilObserver } from 'src/utils';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';

import { useArticleElement } from 'src/hooks';

expect.extend(matchers);

describe('CategoryInput', () => {
  const onChange = jest.fn();
  const renderTitleInput = () => {
    return render(
      <RecoilRoot>
        <RecoilObserver node={articleState} onChange={onChange} />
        <TitleInput useArticleElement={useArticleElement} />
      </RecoilRoot>,
    );
  };

  const expectedState = (title: string) => {
    return {
      content: '',
      description: '',
      imgUrl: '',
      tags: [],
      title,
      createdAt: '',
      category: 'programming',
    };
  };

  context('제목을 입력하면', () => {
    it('articleState의 title이 변경된다', async () => {
      const { getByRole } = renderTitleInput();
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: '제목' } });

      expect(onChange).toHaveBeenNthCalledWith(2, expectedState('제목'));
    });
  });
});
