import React from 'react';
import styled from '@emotion/styled';

interface Props {
  text: string;
  listLength: number;
}

const Hero = ({ text, listLength }: Props) => {
  return <Text listLength={listLength}>{text}</Text>;
};

interface StyleProps {
  listLength: number;
}

const Text = styled.h1<StyleProps>`
  font-size: 5rem;
  position: relative;
  margin-bottom: 30px;
  :after {
    content: '${(props) => props.listLength}';
    font-size: 2.5rem;
    position: absolute;
    top: 0;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export default Hero;
