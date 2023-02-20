import { TextEditor } from 'src/components';

import CategoryInput from 'src/components/Inputs/CategoryInput/CategoryInput';
import TitleInput from 'src/components/Inputs/TitleInput/TitleInput';
import styled from '@emotion/styled';

import { useArticleElement } from 'src/hooks';

const WritePageContainer = () => {
  return (
    <>
      <TitleWrapper>
        <CategoryInput useArticleElement={useArticleElement} />
        <TitleInput useArticleElement={useArticleElement} />
      </TitleWrapper>

      <TextEditor useArticleElement={useArticleElement} />
    </>
  );
};

export default WritePageContainer;

const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
`;
