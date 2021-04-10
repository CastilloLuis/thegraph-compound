import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { useDispatch, useStore } from '../../store/provider';

import Button from '../Button/Button';
import { 
  HeaderContainer,
  NavbarLinkContainer,
  StyledLink,
  HeaderText
} from './Header.styles';
import ConnectedLabel from '../ConnectedLabel/ConnectedLabel';
import { types } from '../../store/types';
import { getShorterAddress } from '../../utils/utils';

interface HeaderProps {};

const Header: React.FC<HeaderProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { wallet: { currentAccount } } = useStore();

  return (
    <HeaderContainer>
      <HeaderText>Mainnet</HeaderText>
      <NavbarLinkContainer>
        <StyledLink active><span>Dashboard</span></StyledLink>
      </NavbarLinkContainer>
      {
        currentAccount ? (
          <ConnectedLabel account={getShorterAddress(currentAccount)}/>
        ) : (
          <Button
            outline
            label="Connect Wallet"
            height="50px"
            width="150px"
            onClick={() => dispatch({ type: types.ui.handleWalletModal, payload: true})}
          />
        )
      }
    </HeaderContainer>
  )
}

export default Header;
