import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import {
  BotStartType,
  botStart,
  botStop,
  getAvailableBalance,
  getBot,
  getBotData,
} from "@/apis/oasisbot/bot";
import { getCoin } from "@/apis/oasisbot/coin";
import { getTransaction } from "@/apis/oasisbot/transaction";
import exchangeAtom from "@/datas/exchange";

export function useBot() {
  const queryClient = useQueryClient();
  const exchange = useAtomValue(exchangeAtom);

  const startBotMutation = useMutation({
    mutationFn: (data: BotStartType) => botStart(data, exchange),
    mutationKey: ["startBot", exchange],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBot"] });
    },
  });

  const stopBotMutation = useMutation({
    mutationFn: botStop,
    mutationKey: ["stopBot"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBot"] });
    },
  });

  return {
    startBotMutation,
    stopBotMutation,
  };
}

export function useBotQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const botQuery = useQuery({
    queryKey: ["getBot", exchange || "all"],
    queryFn: () => getBot(exchange || "all"),
    refetchOnMount: false,
  });

  return {
    botQuery,
  };
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
    queryFn: () => getAvailableBalance(exchange),
  });

  return {
    coinQuery,
    transactionQuery,
    balanceQuery,
  };
}

export function useBotData() {
  const [exchange] = useAtom(exchangeAtom);
  const botDataQuery = useQuery({
    queryKey: ["getBotData", exchange],
    queryFn: () => getBotData(exchange),
  });

  return { botDataQuery };
}
