import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

import { theme } from 'src/style';

interface Props {
  isActive: boolean;
  path: string;
  title: string;
  name: string;
}

const NavBarItem = ({ isActive, path, title, name }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [barWidth, setBarWidth] = useState<number>();

  useEffect(() => {
    if (ref.current) {
      setBarWidth(ref.current.offsetWidth - 2);
    }
  }, [ref]);

  return (
    <li>
      <StyledLink href={path} title={title} passHref legacyBehavior>
        <Item ref={ref} barWidth={barWidth} isActive={isActive} lang="en">
          {name}
        </Item>
      </StyledLink>
    </li>
  );
};

export default NavBarItem;

interface StyleProps {
  isActive?: boolean;
  barWidth?: number;
}

const StyledLink = styled(Link)<StyleProps>`
  text-decoration-line: none;
  display: flex;
  align-items: center;
  position: relative;
`;

const entrance = keyframes`
 0% {
    -webkit-transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const Item = styled.a<StyleProps>`
  color: #bababa;
  cursor: pointer;
  position: relative;
  :hover {
    color: ${theme.color.primary};
    ::after {
      content: '';
      border: 1px solid ${theme.color.primary};
      width: ${({ barWidth }) => barWidth}px;
      position: absolute;
      bottom: -26px;
      left: 0;
      animation: ${entrance} 0.4s cubic-bezier(0.23, 1, 0.32, 1) both;
    }
  }
`;
