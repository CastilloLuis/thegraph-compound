import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const UserBalanceContainer = styled.div`
  ${flex('center', 'center', 'column')};
  max-width: 600px;
  width: 100%;
  background: #FFF;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 7px 29px 0 rgba(0,0,0,0.07);
`

export const BalanceUserWrapper = styled.div`
  ${flex('center', 'space-between')};
  width: 100%;
  margin-top: 15px;
`

export const BalanceWrapper = styled.div`
  width: 50%;
`

export const BalanceTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`

export const BalanceEth = styled.div`
  ${flex('center', 'center')};
  height: 50px;
  i { margin-right: 10px; }
`