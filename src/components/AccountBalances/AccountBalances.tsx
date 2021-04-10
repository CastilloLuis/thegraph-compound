import React from 'react';

import { Account } from '../../entities/compound.entity';

import {
  AccountBalancesContainer,
  AccountBalancesTitle,
  AccountBalanceItem,
  AccountBalancesContent,
  AccountInfo,
  TokenBalances,
  TokenBalance,
  Symbol,
  SkeletonWrapper
} from './AccountBalances.styles';

import { generateAvatar, getShorterAddress } from '../../utils/utils';
import { Margin } from '../../styles/spacing';
import Skeleton from 'react-loading-skeleton';

interface AccountBalancesProps {
  accounts: Account[]
}

const AccountBalances: React.FC<AccountBalancesProps> = ({ accounts }) => {

  const hasHighRatio = (health: string) => {
    if (!health) return false;
    const ratio = parseInt(health);
    return ratio > 1;
  }

  console.log(accounts)
  return (
    <AccountBalancesContainer>
      <AccountBalancesTitle>Account Balances</AccountBalancesTitle>
      <AccountBalancesContent>
        {
         !accounts && (
            <SkeletonWrapper>
            {[1,2,3,4,5].map(_ => (
              <Margin bottom="15px" key={'skeleton' + _}>
                <Skeleton height={80} width={550} />
              </Margin>
            ))}
            </SkeletonWrapper>
          )
        }
        {accounts?.map(acc => (
          <AccountBalanceItem key={acc.id} highRatio={hasHighRatio(acc.health)}>
            <img loading="lazy" src={generateAvatar(acc.id.substring(0,32))} alt={acc.id} />
            <AccountInfo>
              <span>{getShorterAddress(acc.id)}</span>
              <TokenBalances>
                {
                  acc.tokens.map(token => (
                    <TokenBalance key={token.id}>
                      <Symbol>{token.symbol}</Symbol>
                      <span>{token.cTokenBalance}</span>
                    </TokenBalance>
                  ))
                }
              </TokenBalances>
            </AccountInfo>
          </AccountBalanceItem>
        ))}
      </AccountBalancesContent>
    </AccountBalancesContainer>
  )
}

export default AccountBalances;
