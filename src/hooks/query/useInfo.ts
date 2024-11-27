import { useQuery } from "@tanstack/react-query";

import api from "@/libs/network";

export interface RankingType {
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

export interface RankingItem {
  id: number;
  rank: number;
  userName: string;
  exchangeName: string;
  coinName: string;
  profitLossRate: number;
  duration: number;
  presetData: string;
}

export function useInfoRanking(period: 1 | 30 | 180 | 365) {
  const rankingQuery = useQuery({
    queryKey: ["getRanking", period],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<RankingItem[]>>("/ranking", {
        params: { period },
      });

      const result: RankingType[] = [];
      res.data?.data.map((data: RankingItem, n) => {
        const type: RankingType = {
          id: n + 1,
          rank: data.rank,
          user: {
            icon: "",
            nickname: data.userName,
          },
          market: data.exchangeName,
          item: data.coinName,
          accumulatedProfit: data.profitLossRate,
          period: data.duration,
          presetData: "",
        };

        result.push(type);

        return result;
      });

      return result;
    },
  });

  return {
    rankingQuery,
  };
}

export interface TradeStyleType {
  tag: string[];
  accountBalance: number;
  winRate: number;
  totalProfitLossRate: number;
}
export function useInfoTradeStyle() {
  const tradeStyleQuery = useQuery({
    queryKey: ["tradeStyle"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<TradeStyleType>>("/trade_style");
      return res.data?.data;
    },
  });

  return {
    tradeStyleQuery,
  };
}
