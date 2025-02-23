import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";
import api from "@/libs/network";

export function useInfoRanking(period: 1 | 30 | 180 | 365) {
  const rankingQuery = useQuery({
    queryKey: ["getRanking", period],
    queryFn: async () => {
      const res = await api.get<ResponseT<Common.RankingResponseT[]>>("/ranking", {
        params: { period },
      });

      const result: Common.RankingT[] = res.data?.data.map((data, n) => {
        const type: Common.RankingT = {
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
        return type;
      });

      return result;
    },
  });

  return {
    rankingQuery,
  };
}

export function useInfoTradeStyle() {
  const exchange = useAtomValue(exchangeAtom);

  const tradeStyleQuery = useQuery({
    queryKey: ["tradeStyle"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Account.TradeStyleT>>("/trade_style", {
        params: { exchange },
      });
      return res.data?.data;
    },
  });

  return {
    tradeStyleQuery,
  };
}
