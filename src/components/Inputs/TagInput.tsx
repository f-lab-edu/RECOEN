import React, { useState, CompositionEvent, useEffect } from 'react';
import styled from '@emotion/styled';

export interface Props {
  onChange: (args: string[]) => void;
  values: string[];
}

const emptyArray: string[] = [];

export const TagInput = ({ onChange, values = emptyArray }: Props) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>();
  const [isOnComposition, setIsOnComposition] = useState(false);

  useEffect(() => {
    if (tags) onChange(tags);
  }, [tags, onChange]);

  const composition = (e: CompositionEvent<HTMLInputElement>) => {
    if (e.type === 'compositionend') {
      setIsOnComposition(false);
      return;
    }
    setIsOnComposition(true);
  };

  const onRemove = (tag: string) => {
    const nextTags = values.filter((t) => t !== tag);
    setTags(nextTags);
  };

  const handleBackspaceRemove = () => {
    const nextTags = values.filter((t, i) => i !== values.length - 1);
    setTags(nextTags);
  };

  const checkDuplicatedTag = (value: string) => {
    return values.includes(value);
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    const keys = [',', 'Enter'];
    if (e.key === 'Backspace' && e.target.selectionEnd === 0) {
      handleBackspaceRemove();
    }

    if (!isOnComposition && keys.includes(e.key)) {
      e.preventDefault();
      if (!checkDuplicatedTag(value)) setTags(values.concat(value));
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
      {values &&
        values.map((tag) => (
          <Tag key={tag} onClick={() => onRemove(tag)}>
            {tag}
          </Tag>
        ))}
      <Input
        value={value}
        onKeyDown={onKeyDown}
        placeholder="#태그입력"
        {...eventProps}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  color: #9499a1;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #494c56;
  font-size: 14px;
  ::placeholder {
    color: #494c56;
  }
`;
