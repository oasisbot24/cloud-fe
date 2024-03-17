import api from "@/apis/network";

interface HistoryType {
  date: Date;
  coin: string;
  side: string;
  price: number;
  volume: number;
  totalPrice: number;
  profitLossRate: number;
  profitLoss: number;
  currencyUnit: string;
}
interface BotType {
  botId: number;
  isRunning: boolean;
  preset: string;
  ststus: string;
  history: Array<HistoryType>;
  profitCutPrice: string;
  lossCutPrice: string;
}
export default function getBotHistory(): Promise<BotType> {
  return api.get("/bot").then(res => {
    const result = {
      botId: res.data?.data.botId,
      isRunning: res.data?.data.isRunning,
      preset: res.data?.data.preset,
      ststus: res.data?.data.status,
      history: res.data?.data.history,
      profitCutPrice: res.data?.data.profitCutPrice,
      lossCutPrice: res.data?.data.lossCutPrice,
    };

    return result;
  });
}
