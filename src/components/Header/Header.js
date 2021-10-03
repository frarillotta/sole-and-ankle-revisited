import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, SIZES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Saleaaaaa</NavLink>
          <NavLink href="/new">New&nbsp;Releaaaaases</NavLink>
          <NavLink href="/men">Meaaaan</NavLink>
          <NavLink href="/women">Woaaaamen</NavLink>
          <NavLink href="/kids">Kaaads</NavLink>
          <NavLink href="/collections">Colleaaaactions</NavLink>
        </DesktopNav>
        <Side />
        <TabletNav>
          <NavIcon>
            <Icon
              color={COLORS.gray[900]}
              id={'shopping-bag'}
              size={24}
              strokeWidth={2}
            />
          </NavIcon>
          <NavIcon>
            <Icon
              color={COLORS.gray[900]}
              id={'search'}
              size={24}
              strokeWidth={2}
            />
          </NavIcon>
          <NavIcon onClick={() => setShowMobileMenu(true)}>
            <Icon
              color={COLORS.gray[900]}
              id={'menu'}
              size={24}
              strokeWidth={2}
            />
          </NavIcon>
        </TabletNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media (max-width: ${SIZES.tablet}) {
    border-top: 4px solid ${COLORS.gray[900]};
  }
  @media (max-width: ${SIZES.phone}) {
    padding: 18px 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 6vw - 2.5rem, 3rem);
  margin: 0px 48px;
  overflow: scroll;
  @media (max-width: ${SIZES.tablet}) {
    display: none;
  }
`;

const TabletNav = styled.nav`
  display: none;
  gap: 40px;  
  @media (max-width: ${SIZES.phone}) {
    display: flex;
    gap: 20px;
  }
  @media (max-width: ${SIZES.tablet}) {
    display: flex;
  }
`;

const NavIcon = styled(UnstyledButton)`
  transform: translateY(4px);
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
