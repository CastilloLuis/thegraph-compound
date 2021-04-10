import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const DashboardContainer = styled.div`
  ${flex('center', 'center', 'column')};
  padding: 20px;
  box-sizing: border-box;
`;

export const Balances = styled.div`
  width: 100%;
  ${flex('center', 'center')};
`