import api from "@/apis/network";

interface HistoryType {
  date: Date;
  // coin: string;
  side: string;
  price: number;
  volume: number;
  total_price: number;
  profit_loss_rate: number;
  profit_loss: number;
  // currencyUnit: string;
}
export interface BotType {
  id: number;
  isRunning: boolean;
  presetName: string;
  status: string;
  history: Array<HistoryType>;
  profitCutPrice: string;
  lossCutPrice: string;
}
export default function getBot(): Promise<BotType> {
  return api.get("/bot").then(res => {
    return res.data?.data;
  });
}
