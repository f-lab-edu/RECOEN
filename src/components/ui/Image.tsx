import React from 'react';
import NextImage from 'next/legacy/image';
import styled from '@emotion/styled';

interface Props {
  src: string;
  blurDataURL: string;
  alt: string;
  width?: number;
  height: number;
  fullWidth?: boolean;
}

const Image: React.FC<Props> = ({
  src,
  blurDataURL,
  alt,
  width,
  height,
  fullWidth,
}) => {
  return (
    <ImageWrapper width={width} height={height} fullWidth={fullWidth}>
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
  width?: number;
  height: number;
  fullWidth?: boolean;
}

const ImageWrapper = styled.div<StyleProps>`
  width: ${(props) => props.width}px;
  width: ${(props) => props.fullWidth && '100%'};
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
