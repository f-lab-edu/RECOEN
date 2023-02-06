import React from 'react';
import { render } from '@testing-library/react';
import NavBarItem, { Props } from './NavBarItem';

describe('NavBarItem', () => {
  const renderNavBar = ({ isActive, path, title, name }: Props) =>
    render(
      <NavBarItem isActive={isActive} path={path} title={title} name={name} />,
    );

  context('props로 값들을 받아오면', () => {
    it('받아온 값들이 화면에 잘 보인다', () => {
      const { getByText } = renderNavBar({
        isActive: false,
        path: '/',
        title: 'title',
        name: 'name',
      });
      const item = getByText('name');

      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('href', '/');
    });
  });

  context('isActive 상태가 true이면 ', () => {
    it('Item의 색깔이 primary 색으로 변경된다', () => {
      const { getByText } = renderNavBar({
        isActive: true,
        path: '/',
        title: 'title',
        name: 'name',
      });

      expect(getByText('name')).toHaveStyle('color: #5C62F3');
    });
  });
});
