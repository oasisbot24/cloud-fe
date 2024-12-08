declare namespace Bot {
  interface PostBotStartBody {
    botName: string;
    presetId: number;
    coinId: number;
    startBalance: number;
    leverage: number | null;
  }
  interface InfoT {
    id: number;
    isRunning: boolean;
    presetName: string;
    startBalance: number;
    runningTime: number;
    coinType: string;
  }
  interface TransactionResponseT {
    id: number;
    exchange: string;
    date: string;
    coinName: string;
    position: string;
    totalPrice: number;
    volume: number;
    profitLoss: number;
    profitLossRate: number;
    startBalance: number;
    presetName: string;
  }
  interface TransactionT {
    id: number;
    market: string;
    tradeTime: string;
    coinName: string;
    status: string;
    quantity: {
      totalPrice: number;
      volume: number;
    };
    price: {
      startBalance: number;
      presetName: string;
    };
    profit: {
      profitLoss: number;
      profitLossRate: number;
    };
  }
}
