import React from 'react'
import { Account } from '../../entities/compound.entity';

import {
  UserBalanceContainer,
  BalanceWrapper,
  BalanceTitle,
  BalanceEth,
  BalanceUserWrapper
} from './UserBalance.styles';

interface UserBalanceProps {
  currentAccountBalance: Account
}

const UserBalance: React.FC<UserBalanceProps> = ({ currentAccountBalance }) => {

  if (!currentAccountBalance) {
    return (
      <UserBalanceContainer>
        <span>Please connect your wallet in order to <br/> get your supply/borrow balance</span>
      </UserBalanceContainer>
    )
  }

  return (
    <UserBalanceContainer>
      <BalanceTitle>Current Account</BalanceTitle>
      <BalanceUserWrapper>
        <BalanceWrapper>
          <BalanceTitle>Total Supply</BalanceTitle>
          <BalanceEth>
            <i className="fab fa-ethereum"></i> {currentAccountBalance?.totalCollateralValueInEth || '0'}
          </BalanceEth>
        </BalanceWrapper>
        <BalanceWrapper>
          <BalanceTitle>Total Borrow</BalanceTitle>
          <BalanceEth>
            <i className="fab fa-ethereum"></i> {currentAccountBalance?.totalBorrowValueInEth || '0'}
          </BalanceEth>
        </BalanceWrapper>
      </BalanceUserWrapper>
    </UserBalanceContainer>
  )
}

export default UserBalance;
