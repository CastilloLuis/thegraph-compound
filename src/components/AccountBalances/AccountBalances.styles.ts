import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const AccountBalancesContainer = styled.div`
  ${flex('center', 'flex-start', 'column')};
  max-width: 600px;
  width: 100%;
  background: #FFF;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 7px 29px 0 rgba(0,0,0,0.07);
`

export const AccountBalancesTitle = styled.span`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
`

export const SkeletonWrapper = styled.div`
${flex('center', 'center', 'column')};
width: 100%;
`

export const AccountBalanceItem = styled.div<{highRatio: boolean}>`
  ${flex('center', 'flex-start')};
  width: 100%;
  height: 100px;
  ${props => props.highRatio && `
    border-top: 1px solid green;
    border-bottom: 1px solid green;
  `};
  img {
    margin-right: 25px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 5px solid ${props => props.highRatio ? 'green' : 'red'};
  }
  span {
    width: 150px;
  }
`

export const AccountBalancesContent = styled.div`
  width: 100%;
  height: 500px;
  background: #FFF;
  overflow-y: scroll;
`

export const AccountInfo = styled.div`
  ${flex('flex-start', 'flex-start', 'column')};
  width: 100%;
`

export const TokenBalances = styled.div`
  ${flex('center', 'flex-start')}
`

export const TokenBalance = styled.div`
  ${flex('flex-start', 'flex-start', 'column')};
`


export const Symbol = styled.span`
  font-weight: 600;
`