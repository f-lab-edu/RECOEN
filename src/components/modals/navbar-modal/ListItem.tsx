import styled from '@emotion/styled';
import { theme } from 'src/style';

import Link from 'next/link';

interface Props {
  name: string;
  href: string;
  title: string;
  onClick: () => void;
}

const ListItem: React.FC<Props> = ({ name, href, title, onClick }) => {
  return (
    <li>
      <StyledLink href={href} title={title} onClick={onClick}>
        {name}
      </StyledLink>
    </li>
  );
};

export default ListItem;

const StyledLink = styled(Link)`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.gray200};
  padding-left: 30px;
  display: flex;
  align-items: center;
  color: ${theme.color.white};
`;
