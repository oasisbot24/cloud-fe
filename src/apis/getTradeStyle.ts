import api from "@/apis/network";

export interface TradeStyleType {
  tag: string[];
  accountBalance: number;
  winRate: number;
  totalProfitLossRate: number;
}

export default async function getTradeStyle(): Promise<TradeStyleType> {
  const res = await api.get<ApiResponseType<TradeStyleType>>("/trade_style");
  const result: TradeStyleType = {
    tag: res.data?.data.tag,
    accountBalance: res.data?.data.accountBalance,
    winRate: res.data?.data.winRate,
    totalProfitLossRate: res.data?.data.totalProfitLossRate,
  };
  return result;
}
