import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const MarketsBox = styled.div`
  ${flex('center', 'flex-start', 'column')};
  max-width: 100%;
  width: 100%;
  background: #FFF;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 7px 29px 0 rgba(0,0,0,0.07);
`

export const MarketsBoxTitle = styled.span`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  box-sizing: border-box;
  padding: 15px;
`

export const MarketsContent = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
`

export const MarketHeader = styled.div`
  ${flex('center', 'flex-start')};
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  background: #FFF;
  position: sticky;
  top: 0;
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
  span {
    font-weight: 500; 
    font-size: 16px; 
    width: 250px;
  }
`

export const MarketItem = styled.div`
  ${flex('center', 'flex-start')};
  width: 100%;
  height: 80px;
  transition: all 0.1s ease-in-out;
  box-sizing: border-box;
  padding: 15px;
  &:hover {
    background: #f7f7f7;
  }
`

export const MarketName = styled.span`
  width: 250px;
`

export const TotalMarketBalances = styled.span`
  width: 250px;
`