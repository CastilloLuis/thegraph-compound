import React from 'react';

import { Markets as IMarkets} from '../../entities/compound.entity';
import {
  MarketsBox,
  MarketsBoxTitle,
  MarketsContent,
  MarketItem,
  MarketHeader,
  MarketName,
  TotalMarketBalances
} from './Markets.style';
import { SkeletonWrapper } from '../../components/AccountBalances/AccountBalances.styles';
import { Margin } from '../../styles/spacing';
import Skeleton from 'react-loading-skeleton';

interface MarketsProps {
  markets: IMarkets[];
}

const Markets: React.FC<MarketsProps> = ({ markets }) => {
  return (
    <MarketsBox>
      <MarketsBoxTitle>Supply & Borrow Markets</MarketsBoxTitle>
      <MarketsContent>
        <MarketHeader>
          <span>Market Name</span>
          <span>Total Supply</span>
          <span>Total Borrow</span>
        </MarketHeader>
        {!markets &&
          <SkeletonWrapper>
          {[1,2,3,4,5].map(_ => (
            <Margin bottom="15px" top="15px" key={'skeleton' + _}>
              <Skeleton height={80} width={550} />
            </Margin>
          ))}
          </SkeletonWrapper>
        }
        {
          markets?.map(market => (
            <MarketItem key={market.id}>
              <MarketName>{market.name}</MarketName>
              <TotalMarketBalances>{market.totalSupply}</TotalMarketBalances>
              <TotalMarketBalances>{market.totalBorrows}</TotalMarketBalances>
            </MarketItem>
          ))
        }
      </MarketsContent>
    </MarketsBox>
  )
}

export default Markets;
