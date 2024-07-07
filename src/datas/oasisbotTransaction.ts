interface BotTransaction {
  id: number;
  market: string;
  item: string;
  profit: BotTransactionProfit;
  tradeTime: string;
  status: string;
}

interface BotTransactionProfit {
  money: number;
  rate: number;
}

interface BotTransactionQuantity {
  money: number;
  rate: number;
}

interface BotTransactionPrice {
  money: number;
  contents: string;
}

export type {
  BotTransaction,
  BotTransactionProfit,
  BotTransactionQuantity,
  BotTransactionPrice,
};
