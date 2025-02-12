declare namespace Account {
  interface HoldingCoinRatioT {
    name: string;
    price: number;
    ratio: number;
  }
  interface TradeStyleT {
    tag: string[];
    accountBalance: number;
    winRate: number;
    totalProfitLossRate: number;
  }
  interface AvailableBalanceT {
    exchangeName: string;
    availableBalance: number;
  }
  interface BotResultChartResponseT {
    botId: number;
    coinName: string;
    presetName: string;
    totalProfit: number;
    totalProfitRate: number;
    chartData: {
      date: string;
      price: string;
      rate: string;
    }[];
  }
  interface BotResultChartT {
    botId: number;
    coinName: string;
    presetName: string;
    totalProfit: number;
    totalProfitRate: number;
    chartData: {
      date: string[];
      price: number[];
      rate: number[];
    };
  }
  interface BotResultDataT {
    totalTradePrice: {
      value: number;
      difference: number;
    };
    totalTradeCount: {
      value: number;
      difference: number;
    };
    maxProfitRate: {
      rate: number;
      presetName: string;
      coinName: string;
    };
    maxWinRate: {
      rate: number;
      presetName: string;
      coinName: string;
    };
    totalTradeBalance: number;
  }
}
