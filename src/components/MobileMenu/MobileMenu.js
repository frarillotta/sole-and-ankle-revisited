/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import Spacer from '../Spacer';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Spacer />
      <DismissButton onClick={onDismiss}>
        <VisuallyHidden>Close modal</VisuallyHidden>
        <Icon id={'close'} />
      </DismissButton>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  right: 0px;
  top: 0px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 34px;
  right: 22px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 32px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  &:first-of-type {
    color: ${COLORS.secondary}
  };
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: 14px;
`;

export default MobileMenu;
