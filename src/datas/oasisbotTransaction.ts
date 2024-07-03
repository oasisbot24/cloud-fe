interface BotTransaction {
    id: number;
    market: string;
    coinName: string;
    profit: BotTransactionProfit;
    tradeTime: string;
    status: string;
    quantity:BotTransactionQuantity;
    price:BotTransactionPrice

}
  
interface BotTransactionProfit {
    profitLoss: number;
    profitLossRate: number;
}

interface BotTransactionQuantity {
    totalPrice: number;
    volume: number;
}

interface BotTransactionPrice {
    startBalance: number;
    presetName: string;
}


export type { BotTransaction, BotTransactionProfit , BotTransactionQuantity,BotTransactionPrice};
  