import React from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/mixins';

const ConnectedLabelContainer = styled.div`
  ${flex('center', 'center')};
  border: 1px solid #313035;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  div {
    width: 8px;
    height: 8px;
    background: green;
    border-radius: 50%;
  }
  span {
    color: #fff;
    margin-left: 10px;
  }
`

const ConnectedLabel: React.FC<{account: string}> = ({ account }) => {
  return (
    <ConnectedLabelContainer>
      <div></div>
      <span>Connected to {account || ''}</span>
    </ConnectedLabelContainer>
  )
}

export default ConnectedLabel;
