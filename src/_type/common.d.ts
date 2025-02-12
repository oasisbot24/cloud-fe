declare namespace Common {
  interface RankingResponseT {
    id: number;
    rank: number;
    userName: string;
    exchangeName: string;
    coinName: string;
    profitLossRate: number;
    duration: number;
    presetData: string;
  }
  interface RankingT {
    id: number;
    rank: number;
    user: {
      icon: string;
      nickname: string;
    };
    market: string;
    item: string;
    accumulatedProfit: number;
    period: number;
    presetData: string;
  }
  interface CoinT {
    id: number;
    coinName: string;
  }
}
