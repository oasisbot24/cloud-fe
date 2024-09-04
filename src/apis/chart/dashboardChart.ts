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

async function getDashboardChart(): Promise<ChartType[]> {
  const respose = await api.get<ApiResponseType<[]>>(`/chart`);

  const charts: ChartType[] = [];

  respose.data?.data.map((item, n) => {
    // dummy.map((item,n)=>{
    const dateArr: string[] = [];
    const priceArr: number[] = [];
    const rateArr: number[] = [];

    (item["chartData"] as []).map(data => {
      dateArr.push(data["date"]);
      priceArr.push(data["price"]);
      rateArr.push(data["rate"]);
    });

    const type: ChartType = {
      botId: item["botId"],
      coinName: item["coinName"],
      presetName: item["presetName"],
      totalProfit: item["totalProfit"],
      totalProfitRate: item["totalProfitRate"],
      chartData: {
        date: dateArr,
        price: priceArr,
        rate: rateArr,
      },
    };

    charts.push(type);
  });

  return charts;
}

const dummy = [
  {
    botId: 0,
    coinName: "ALL",
    presetName: "ALL",
    totalProfit: 600.0,
    totalProfitRate: 0.6,
    chartData: [
      {
        date: "2024-03-18T15:50:00",
        price: "100.0000",
        rate: "0.1000",
      },
      {
        date: "2024-08-12T15:52:00",
        price: "600.0000",
        rate: "0.5000",
      },
    ],
  },
  {
    botId: 1,
    coinName: "비트코인",
    presetName: "프리셋이름",
    totalProfit: 700.0,
    totalProfitRate: 0.7,
    chartData: [
      {
        date: "2024-03-18T15:50:00",
        price: "100.0000",
        rate: "0.4000",
      },
      {
        date: "2024-08-12T15:52:00",
        price: "600.0000",
        rate: "0.4000",
      },
    ],
  },
  {
    botId: 2,
    coinName: "이더리움",
    presetName: "프리셋이름12",
    totalProfit: 200.0,
    totalProfitRate: 0.2,
    chartData: [
      {
        date: "2024-03-18T15:50:00",
        price: "100.0000",
        rate: "0.3000",
      },
      {
        date: "2024-08-12T15:52:00",
        price: "600.0000",
        rate: "0.3000",
      },
    ],
  },
  {
    botId: 3,
    coinName: "도지코인",
    presetName: "프리셋이름12",
    totalProfit: 300.0,
    totalProfitRate: 0.3,
    chartData: [
      {
        date: "2024-03-18T15:50:00",
        price: "100.0000",
        rate: "0.2000",
      },
      {
        date: "2024-08-12T15:52:00",
        price: "600.0000",
        rate: "0.2000",
      },
    ],
  },
];

export { getDashboardChart };
