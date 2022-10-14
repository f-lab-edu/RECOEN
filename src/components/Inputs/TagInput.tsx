import React, { useState, CompositionEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import XIcon from '../../../public/x.png';
import Image from 'next/image';

export interface Props {
  onChange: (args: string[]) => void;
  values: string[];
}

const emptyArray: string[] = [];

export const TagInput = ({ onChange, values = emptyArray }: Props) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>(emptyArray);
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
      <Input
        value={value}
        onKeyDown={onKeyDown}
        placeholder="#태그입력"
        {...eventProps}
      />
      {values &&
        values.map((tag) => (
          <Tag key={tag} onClick={() => onRemove(tag)}>
            {tag}
            <Image
              src={XIcon}
              alt="x-icon"
              width={18}
              height={18}
              layout="fixed"
            />
          </Tag>
        ))}
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
  color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  background: #3941ff;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  &:hover {
    background: #2d31fa;
  }
  transition: 0.2s ease-in-out;
`;

const Input = styled.input`
  background: #292b2e;
  border-radius: 4px;
  padding: 0px 10px;
  height: 40px;
  width: 100%;
  border: 1px solid #3c3e44;
  outline: none;
  color: #9499a1;
  font-size: 16px;
  ::placeholder {
    color: #494c56;
  }
`;
