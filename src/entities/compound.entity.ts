export interface Account {
  id: string;
  health: string;
  totalBorrowValueInEth: string;
  totalCollateralValueInEth: string;
  tokens: Token[];
}

export interface Token {
  id: string;
  symbol: string;
  cTokenBalance: string;
}

export interface Markets {
  id: string;
  name: string;
  totalBorrows: string;
  totalSupply: string;
}
