import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useStore } from '../../store/provider';
import {
  MARKETS_BY_QTY,
  ACCOUNT_BALANCES_BY_QTY,
  SUPPLY_AND_BORROW_BALANCE_PER_ACCOUNT
} from './queries';

import Layout from '../../components/Layout/Layout';
import AccountBalances from '../../components/AccountBalances/AccountBalances';
import Markets from '../../components/Markets/Markets';
import UserBalance from '../../components/UserBalance/UserBalance';

import { Account } from '../../entities/compound.entity';
import { Markets as IMarkets } from '../../entities/compound.entity';

import {
  DashboardContainer,
  Balances
} from './Dashboard.styles';
import { Margin } from '../../styles/spacing';

const COMPOUND_API = 'https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2';
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  
  const { wallet: { currentAccount } } = useStore();
  const [currentAccountBalance, setCurrentAccountBalance] = useState<Account>();
  const [accounts, setAccounts] = useState<Account[]>(null);
  const [markets, setMarkets] = useState<IMarkets[]>(null);

  useEffect(() => {
    queryMarkets();
    queryAccountBalances();
  }, []);
  
  useEffect(() => {
    if (!currentAccount) return;
    queryCurrentAccountBalance(currentAccount);
  }, [currentAccount]);

  const queryMarkets = async (): Promise<void> => {
    const query = { query: MARKETS_BY_QTY(15) };
    const { data } = await axios.post(COMPOUND_API, query);
    setMarkets(data.data.markets);
  }

  const queryAccountBalances = async (): Promise<void> => {
    const query = { query: ACCOUNT_BALANCES_BY_QTY(1000) };
    const { data } = await axios.post(COMPOUND_API, query);
    setAccounts(data.data.accounts);
  }

  const queryCurrentAccountBalance = async (address: string): Promise<void> => {
    const query = { query: SUPPLY_AND_BORROW_BALANCE_PER_ACCOUNT(address) };
    const { data } = await axios.post(COMPOUND_API, query);
    setCurrentAccountBalance(data.data.account);
  }

  return (
    <Layout>
      <DashboardContainer>
        <UserBalance currentAccountBalance={currentAccountBalance} />
        <Margin top="50px">
          <Balances>
            <Margin left="15px" right="15px">
              <AccountBalances accounts={accounts} />
            </Margin>
            <Margin left="15px" right="15px">
              <Markets markets={markets} />
            </Margin>
          </Balances>
        </Margin>
      </DashboardContainer>
    </Layout>
  )
}

export default Dashboard;
