interface ProfitRank {
  id: number;
  user: {
    icon: string;
    nickname: string;
  };
  accumulatedProfit: number;
  market: string;
  item: string;
  period: string;
}

export default ProfitRank;
