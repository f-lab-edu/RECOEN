import { render, fireEvent, act } from '@testing-library/react';
import DescInput from './DescInput';
import { matchers } from '@emotion/jest';
import RecoilObserver from 'src/components/RecoilObserver';
import { RecoilRoot } from 'recoil';
import { articleState } from 'src/recoil/article';

import { useArticleElement } from 'src/hooks/useHandleArticle';

expect.extend(matchers);

describe('DescInput', () => {
  const onChange = jest.fn();
  const renderDescInput = () => {
    return render(
      <RecoilRoot>
        <RecoilObserver node={articleState} onChange={onChange} />
        <DescInput useArticleElement={useArticleElement} />
      </RecoilRoot>,
    );
  };

  const expectedState = (description: string) => {
    return {
      content: '',
      description,
      imgUrl: '',
      tags: [],
      title: '',
      createdAt: '',
      category: 'programming',
    };
  };

  context('focus되면', () => {
    it('인풋라인이 파란색으로 바뀐다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');
      expect(descInput).toHaveStyle('border : 1px solid #3c3e44');

      descInput.focus();
      expect(descInput).toHaveStyle('border : 1px solid #3941ff');
    });
  });

  context('입력하면', () => {
    it('onChange에 값이 들어간다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');

      await fireEvent.change(descInput, { target: { value: '입력' } });

      expect(onChange).toHaveBeenNthCalledWith(3, expectedState('입력'));
    });
  });

  context('글자가 200자가 넘어갔을 때', () => {
    it('인풋라인이 빨간색으로 바뀐다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');

      expect(descInput).toHaveStyle('border : 1px solid #3c3e44');

      descInput.focus();

      fireEvent.change(descInput, {
        target: {
          value:
            'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
        },
      });

      expect(descInput).toHaveStyle('border : 1px solid #c4001d');
    });

    context('다시 Backspace를 하면', () => {
      it('인풋라인이 파란색으로 돌아온다', async () => {
        const { getByRole } = renderDescInput();
        const descInput = getByRole('textbox');

        descInput.focus();

        fireEvent.change(descInput, {
          target: {
            value:
              'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
          },
        });

        expect(descInput).toHaveStyle('border : 1px solid #c4001d');

        const backspaceOptions = {
          key: 'Backspace',
          keyCode: 8,
          charCode: 8,
        };

        fireEvent.keyDown(descInput, backspaceOptions);
        fireEvent.keyDown(descInput, backspaceOptions);

        expect(descInput).toHaveStyle('border : 1px solid #3941ff');
      });
    });

    context('onBlur가 일어나면', () => {
      it('인풋라인에 빨간색이 사라진다', async () => {
        const { getByRole } = renderDescInput();
        const descInput = getByRole('textbox');

        descInput.focus();

        fireEvent.change(descInput, {
          target: {
            value:
              'Web Vital이란 탁월한 사용자 경험을 제공하기 위한 핵심 지침입니다. 이 Web Vital에는 3가지 핵심 지표가 존재하는데, 그 중 LCP(Lagest Contentful Paint)는 페이지가 처음으로 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려줍니다. 그리고 텍스트보다도 특히 이미지의 사이즈,갯',
          },
        });

        expect(descInput).toHaveStyle('border : 1px solid #c4001d');

        act(() => descInput.blur());

        expect(descInput).toHaveStyle('border : 1px solid #3c3e44');
      });
    });
  });

  context('글자가 199 글자 이하일 때', () => {
    it('Backspace를 하면 그대로 파란색이다', async () => {
      const { getByRole } = renderDescInput();
      const descInput = getByRole('textbox');

      descInput.focus();

      fireEvent.change(descInput, {
        target: {
          value: 'value',
        },
      });

      const backspaceOptions = {
        key: 'Backspace',
        keyCode: 8,
        charCode: 8,
      };

      fireEvent.keyDown(descInput, backspaceOptions);

      expect(descInput).toHaveStyle('border : 1px solid #3941ff;');
    });
  });
});
