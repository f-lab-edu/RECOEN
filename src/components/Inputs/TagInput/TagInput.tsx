import React, { useState, CompositionEvent } from 'react';
import styled from '@emotion/styled';
import Chip from 'src/components/ui/Chip/Chip';
import { useArticleElement } from 'src/hooks/useHandleArticle';

const TagInput = () => {
  const [value, setValue] = useState('');
  const [isOnComposition, setIsOnComposition] = useState(false);
  const [isError, setError] = useState<boolean>(false);

  const { articleElements, setArticleElement } = useArticleElement();
  const { tags } = articleElements;

  const composition = (e: CompositionEvent<HTMLInputElement>) => {
    if (e.type === 'compositionend') {
      setIsOnComposition(false);
      return;
    }
    setIsOnComposition(true);
  };

  const onRemove = (tag: string) => {
    const nextTags = tags.filter((t) => t !== tag);
    setArticleElement({ tags: nextTags });
  };

  const handleBackspaceRemove = () => {
    const nextTags = tags.filter((t, i) => i !== tags.length - 1);
    setArticleElement({ tags: nextTags });
  };

  const checkDuplicatedTag = (value: string) => {
    return tags.includes(value);
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    const keys = [',', 'Enter'];
    if (e.key === 'Backspace' && e.target.selectionEnd === 0) {
      handleBackspaceRemove();
      setError(false);
    }

    if (!isOnComposition && keys.includes(e.key)) {
      e.preventDefault();
      if (tags.length == 3) return setError(true);
      if (value == '') return;

      if (!checkDuplicatedTag(value))
        setArticleElement({ tags: tags.concat(value) });
      setValue('');
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const eventProps = {
    onChange: onChangeInput,
    onCompositionStart: composition,
    onCompositionUpdate: composition,
    onCompositionEnd: composition,
  };

  return (
    <Container>
      <Input
        value={value}
        onKeyDown={onKeyDown}
        placeholder="#태그입력"
        {...eventProps}
        isError={isError}
        onBlur={() => setError(false)}
      />
      {tags?.map((tag) => (
        <Chip key={tag} onClick={() => onRemove(tag)} label={tag} deletable />
      ))}
    </Container>
  );
};

export default TagInput;

interface StyleProps {
  isError?: boolean;
}

const Container = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input<StyleProps>`
  background: #292b2e;
  border-radius: 4px;
  padding: 0px 15px;
  height: 40px;
  width: 100%;
  border: 1px solid #3c3e44;
  outline: none;
  color: #9499a1;
  font-size: 16px;
  ::placeholder {
    color: #494c56;
  }
  :focus {
    border: 1px solid #3941ff;
    ${(props) => props.isError && `border: 1px solid #c4001d;`}
  }
  ${(props) =>
    props.isError &&
    `border: 1px solid #c4001d; 
     color:#c4001d; 
     ::placeholder{
       color:#c4001d;
      }`}
  transition:0.2s ease-in-out;
`;
