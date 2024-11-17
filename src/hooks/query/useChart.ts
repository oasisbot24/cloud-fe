import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

import api from "@/apis/network";
import exchangeAtom from "@/datas/exchange";

export interface CoinRatio {
  name: string;
  price: number;
  ratio: number;
}
export function useChart() {
  const [exchange] = useAtom(exchangeAtom);
  const coinRatioQuery = useQuery({
    queryKey: ["coinRatio", exchange],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<CoinRatio[]>>("/coin_ratio", {
        params: { exchange },
      });
      return res.data.data;
    },
  });
  return { coinRatioQuery };
}

export interface ChartType {
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

export interface ChartDataItem {
  date: string;
  price: string;
  rate: string;
}

export interface ChartResponseItem {
  botId: number;
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
  chartData: ChartDataItem[];
}

export function useDashboardChart() {
  const dashboardChartQuery = useQuery({
    queryKey: ["dashboardchart"],
    queryFn: async () => {
      const response = await api.get<ApiResponseType<ChartResponseItem[]>>(`/chart`);

      const charts: ChartType[] = [];

      response.data?.data.map((item: ChartResponseItem) => {
        const dateArr: string[] = [];
        const priceArr: number[] = [];
        const rateArr: number[] = [];

        item.chartData.map(data => {
          dateArr.push(data.date);
          priceArr.push(parseFloat(data.price));
          rateArr.push(parseFloat(data.rate));

          return 0;
        });

        const type: ChartType = {
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

        charts.push(type);

        return charts;
      });

      return charts;
    },
  });
  return { dashboardChartQuery };
}
