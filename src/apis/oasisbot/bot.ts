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

interface AvailableBalanceType {
  exchangeName: string;
  availableBalance: number;
}

async function getAvailableBalance(
  exchangeName: string,
): Promise<AvailableBalanceType> {
  const res = await api.get<ApiResponseType<AvailableBalanceType>>(
    `/available-balance?exchange=${exchangeName}`,
  );

  return res.data?.data;
}

interface BotDataType {
  totalTradePrice: {
    value: number;
    difference: number;
  };
  totalTradeCount: {
    value: number;
    difference: number;
  };
  maxProfitRate: {
    rate: number;
    presetName: string;
    coinName: string;
  };
  maxWinRate: {
    rate: number;
    presetName: string;
    coinName: string;
  };
  totalTradeBalance: number;
}

async function getBotData(exchangeName: string): Promise<BotDataType> {
  const res = await api.get<ApiResponseType<BotDataType>>(
    `/bot-data?exchange=${exchangeName}`,
  );

  return res.data?.data;
}

export { botStart, botStop, getBot, getAvailableBalance, getBotData };
export type { BotStartType, BotType, AvailableBalanceType, BotDataType };
