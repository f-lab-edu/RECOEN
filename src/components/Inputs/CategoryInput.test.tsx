import { render, fireEvent, within, screen } from '@testing-library/react';
import CategoryInput from './CategoryInput';
import { matchers } from '@emotion/jest';
import { RecoilObserver } from 'src/utils';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';

import { useArticleElement } from 'src/hooks';

expect.extend(matchers);

describe('CategoryInput', () => {
  const onChange = jest.fn();
  const renderCategoryInput = () => {
    return render(
      <RecoilRoot>
        <RecoilObserver node={articleState} onChange={onChange} />
        <CategoryInput useArticleElement={useArticleElement} />
      </RecoilRoot>,
    );
  };

  const expectedState = (category: string) => {
    return {
      content: '',
      description: '',
      imgUrl: '',
      tags: [],
      title: '',
      createdAt: '',
      category,
    };
  };

  context('카테고리를 선택하면', () => {
    it('articleState의 category가 변경된다', async () => {
      const { getByRole } = renderCategoryInput();
      const button = getByRole('button');

      fireEvent.mouseDown(button);

      const listbox = within(getByRole('listbox'));

      fireEvent.click(listbox.getByText('book'));

      expect(onChange).toHaveBeenNthCalledWith(2, expectedState('book'));
    });
  });
});
