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

export type { BotTransaction, BotTransactionProfit };
