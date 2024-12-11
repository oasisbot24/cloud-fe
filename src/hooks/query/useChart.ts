import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

import exchangeAtom from "@/datas/exchange";
import api from "@/libs/network";

export function useChart() {
  const [exchange] = useAtom(exchangeAtom);
  const coinRatioQuery = useQuery({
    queryFn: async () => {
      const res = await api.get<ResponseT<Account.HoldingCoinRatioT[]>>("/coin_ratio", {
        params: { exchange },
      });
      return res.data.data;
    },
    queryKey: ["coinRatio", exchange],
  });
  return { coinRatioQuery };
}

export function useDashboardChart() {
  const dashboardChartQuery = useQuery({
    queryKey: ["dashboardchart"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Account.BotResultChartResponseT[]>>(`/chart`);

      const charts: Account.BotResultChartT[] = res.data?.data.map(item => {
        const dateArr: string[] = [];
        const priceArr: number[] = [];
        const rateArr: number[] = [];

        item.chartData.map(data => {
          dateArr.push(data.date);
          priceArr.push(parseFloat(data.price));
          rateArr.push(parseFloat(data.rate));

          return 0;
        });

        const type: Account.BotResultChartT = {
          botId: item.botId,
          coinName: item.coinName,
          presetName: item.presetName,
          totalProfit: item.totalProfit,
          totalProfitRate: item.totalProfitRate,
          chartData: {
            date: dateArr,
            price: priceArr,
            rate: rateArr,
          },
        };
        return type;
      });

      return charts;
    },
  });
  return { dashboardChartQuery };
}
