import api from "@/apis/network";

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

async function getDashboardChart(): Promise<ChartType[]> {
  const response = await api.get<ApiResponseType<[]>>(`/chart`);

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
}

export { getDashboardChart };
