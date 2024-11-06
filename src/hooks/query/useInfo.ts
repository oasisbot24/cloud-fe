import { useQuery } from "@tanstack/react-query";

import { getRanking } from "@/apis/info/ranking";
import { getTradeStyle } from "@/apis/info/tradeStyle";

export function useInfoRanking(period: 1 | 30 | 180 | 365) {
  const rankingQuery = useQuery({
    queryKey: ["getRanking", period],
    queryFn: () => getRanking(period),
  });

  return {
    rankingQuery,
  };
}

export function useInfoTradeStyle() {
  const tradeStyleQuery = useQuery({
    queryKey: ["tradeStyle"],
    queryFn: () => getTradeStyle(),
  });

  return {
    tradeStyleQuery,
  };
}
