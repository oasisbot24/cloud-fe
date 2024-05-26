import api from "@/apis/network";

interface BotStartType {
  botName: string;
  presetId: number;
  coinId: number;
  startBalance: number;
  leverage: any;
}

async function botStart(data: BotStartType): Promise<void> {
  await api.post<ApiResponseType<void>>("/start_bot", data);
}

async function botStop(id: number): Promise<void> {
  await api.post<ApiResponseType<void>>(`/stop_bot/${id}`);
}

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

interface BotType {
  id: number;
  isRunning: boolean;
  presetName: string;
  status: string;
  history: Array<HistoryType>;
  profitCutPrice: string;
  lossCutPrice: string;
}

async function getBot(): Promise<BotType> {
  const res = await api.get<ApiResponseType<BotType>>("/bot");
  return res.data?.data;
}

export { botStart, botStop, getBot };
export type { BotStartType, BotType, HistoryType };
