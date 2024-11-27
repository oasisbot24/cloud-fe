import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import api from "@/apis/network";
import { getCoin } from "@/apis/oasisbot/coin";
import { getTransaction } from "@/apis/oasisbot/transaction";
import exchangeAtom from "@/datas/exchange";

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
      queryClient.invalidateQueries({ queryKey: ["getBot"] });
    },
  });

  const restartBotMutation = useMutation({
    mutationFn: async (id: number) => api.post<ApiResponseType<void>>(`/restart_bot/${id}`),
    mutationKey: ["restartBot"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBot"] });
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
  runningTime: number;
  coinType: string;
}
export function useBotQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const botQuery = useQuery({
    queryKey: ["getBot", exchange || "all"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<BotType[]>>(`/bot?exchange=${exchange || "all"}`);
      return res.data?.data;
    },
    refetchOnMount: false,
  });

  return {
    botQuery,
  };
}

export interface AvailableBalanceType {
  exchangeName: string;
  availableBalance: number;
}

export function useBotInfo() {
  const [exchange] = useAtom(exchangeAtom);
  const coinQuery = useQuery({
    queryKey: ["getCoin", exchange],
    queryFn: () => getCoin(exchange),
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
