import { GridRowId } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";
import api from "@/libs/network";

export interface BotStartType {
  botName: string;
  presetId: number;
  coinId: number;
  startBalance: number;
  leverage: number | null;
}
export function useBot() {
  const queryClient = useQueryClient();
  const exchange = useAtomValue(exchangeAtom);

  const startBotMutation = useMutation({
    mutationFn: async (data: BotStartType) =>
      api.post<ApiResponseType<void>>("/start_bot", data, {
        params: { exchange },
      }),
    mutationKey: ["startBot", exchange],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBot"] });
    },
  });

  const stopBotMutation = useMutation({
    mutationFn: async (id: number) => api.post<ApiResponseType<void>>(`/stop_bot/${id}`),
    mutationKey: ["stopBot"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBotDetail"] });
    },
  });

  const restartBotMutation = useMutation({
    mutationFn: async (id: number) => api.post<ApiResponseType<void>>(`/restart_bot/${id}`),
    mutationKey: ["restartBot"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBotDetail"] });
    },
  });

  return {
    startBotMutation,
    stopBotMutation,
    restartBotMutation,
  };
}

export interface BotType {
  id: number;
  isRunning: boolean;
  presetName: string;
  startBalance: number;
  standardMinute: number;
  runningTime: number;
  coinType: string;
}
export function useBotQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const botListQuery = useQuery({
    queryKey: ["getBot", exchange || "all"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<BotType[]>>(`/bot?exchange=${exchange || "all"}`);
      return res.data?.data;
    },
    refetchOnMount: false,
  });

  return {
    botListQuery,
  };
}

export function useBotDetailQuery(botId?: GridRowId) {
  const [exchange] = useAtom(exchangeAtom);
  const botDetailQuery = useQuery({
    queryKey: ["getBotDetail", exchange || "all"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<BotType[]>>(`/bot?exchange=${exchange || "all"}`);
      return res.data?.data;
    },
    select: data => data.find(item => item.id === botId),
    refetchOnMount: false,
    initialData: undefined,
  });

  return { botDetailQuery };
}

export interface AvailableBalanceType {
  exchangeName: string;
  availableBalance: number;
}

interface CoinType {
  id: number;
  coinName: string;
}

interface BotTransactionType {
  id: number;
  market: string;
  tradeTime: string;
  coinName: string;
  status: string;
  quantity: {
    totalPrice: number;
    volume: number;
  };
  price: {
    startBalance: number;
    presetName: string;
  };
  profit: {
    profitLoss: number;
    profitLossRate: number;
  };
}

interface BotItem {
  id: number;
  exchange: string;
  date: string;
  coinName: string;
  position: string;
  totalPrice: number;
  volume: number;
  profitLoss: number;
  profitLossRate: number;
  startBalance: number;
  presetName: string;
}

async function getTransaction(exchangeName: string): Promise<BotTransactionType[]> {
  const respose = await api.get<ApiResponseType<[]>>(`/transaction?exchange=${exchangeName}`);

  const bots: BotTransactionType[] = [];
  respose.data?.data.map((item: BotItem, n) => {
    const type: BotTransactionType = {
      id: n + 1,
      market: item.exchange,
      tradeTime: item.date,
      coinName: item.coinName,
      status: item.position === "open" ? "buy" : "sell",
      quantity: {
        totalPrice: item.totalPrice,
        volume: item.volume,
      },
      price: {
        startBalance: item.startBalance,
        presetName: item.presetName,
      },
      profit: {
        profitLoss: item.profitLoss,
        profitLossRate: item.profitLossRate,
      },
    };

    bots.push(type);

    return bots;
  });

  return bots;
}

export function useBotInfo() {
  const [exchange] = useAtom(exchangeAtom);
  const coinQuery = useQuery({
    queryKey: ["getCoin", exchange],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<CoinType[]>>("/coin", {
        params: { exchange },
      });
      return res.data.data;
    },
    select: data =>
      data.map(item => ({
        label: item.coinName,
        value: item.id,
      })),
  });

  const transactionQuery = useQuery({
    queryKey: ["getTransaction", exchange],
    queryFn: () => getTransaction(exchange),
  });

  const balanceQuery = useQuery({
    queryKey: ["getAvailableBalance", exchange],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<AvailableBalanceType>>(
        `/available-balance?exchange=${exchange}`,
      );

      return res.data?.data;
    },
  });

  return {
    coinQuery,
    transactionQuery,
    balanceQuery,
  };
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

export function useBotData() {
  const [exchange] = useAtom(exchangeAtom);
  const botDataQuery = useQuery({
    queryKey: ["getBotData", exchange],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<BotDataType>>(`/bot-data?exchange=${exchange}`);
      return res.data?.data;
    },
  });

  return { botDataQuery };
}
