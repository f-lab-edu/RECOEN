import React from 'react';
import BaseModal from '../base-modal/BaseModal';
import styled from '@emotion/styled';
import { theme } from 'src/style';

import { useHandleOpenModal } from 'src/hooks/useHandleOpenModal';

import ListItem from './ListItem';
import navItems from 'src/fixtures/navItems';

const NavbarModal = () => {
  const handleOpenModal = useHandleOpenModal();

  return (
    <BaseModal
      handleOpenModal={() => handleOpenModal(null)}
      options={{ mobile: true }}
    >
      <Container>
        <ListWrapper>
          {navItems.map((item) => {
            return (
              <ListItem
                key={item.id}
                name={item.name}
                title={item.title}
                href={item.path}
                onClick={() => handleOpenModal(null)}
              />
            );
          })}
        </ListWrapper>
      </Container>
    </BaseModal>
  );
};

export default NavbarModal;

const Container = styled.nav`
  width: 100vw;
  height: calc(100vh);
  background-color: ${theme.color.background};
  overflow-y: scroll;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;
