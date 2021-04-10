export const MARKETS_BY_QTY = (qty: number): string => `
  {
    markets(first: ${qty}) {
      id
      name
      totalBorrows
      totalSupply
    }
  }
`;

export const ACCOUNT_BALANCES_BY_QTY = (qty: number = 10): string => `
{
  accounts(first: ${qty}) {
    id
    tokens(
      first: 3
    ) {
      id
      symbol
      cTokenBalance
    }
    health
    totalBorrowValueInEth
    totalCollateralValueInEth
  }
}
`;

export const SUPPLY_AND_BORROW_BALANCE_PER_ACCOUNT = (address: string): string => `
  {
    account(id: "${address}") {
      id
      health
      totalBorrowValueInEth
      totalCollateralValueInEth
    }
  }
`;
