import api from "@/apis/network";

interface BotStartType {
  botName: string;
  presetId: number;
  coinId: number;
  startBalance: number;
  leverage: number | null;
}

async function botStart(
  data: BotStartType,
  exchange: ExchangeType,
): Promise<void> {
  await api.post<ApiResponseType<void>>("/start_bot", data, {
    params: { exchange },
  });
}

async function botStop(id: number): Promise<void> {
  await api.post<ApiResponseType<void>>(`/stop_bot/${id}`);
}

interface BotType {
  id: number;
  isRunning: boolean;
  presetName: string;
  startBalance: number;
  runningTime: number;
  coinType: string;
}

async function getBot(exchangeName: string): Promise<BotType[]> {
  const res = await api.get<ApiResponseType<BotType[]>>(
    `/bot?exchange=${exchangeName}`,
  );
  return res.data?.data;
}

export { botStart, botStop, getBot };
export type { BotStartType, BotType };
