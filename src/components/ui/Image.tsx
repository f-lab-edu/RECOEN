import React from 'react';
import NextImage from 'next/image';
import styled from '@emotion/styled';

interface Props {
  src: string;
  blurDataURL: string;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<Props> = ({ src, blurDataURL, alt, width, height }) => {
  return (
    <ImageWrapper width={width} height={height}>
      <CustomImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </ImageWrapper>
  );
};

export default Image;

interface StyleProps {
  width: number;
  height: number;
}

const ImageWrapper = styled.div<StyleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
`;

const CustomImage = styled(NextImage)`
  :hover {
    transform: scale(1.09);
    border-radius: 16px;
  }
  transition: all 0.3s ease-in-out;
`;
