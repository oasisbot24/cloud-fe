import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { botStart, botStop, getBot } from "@/apis/oasisbot/bot";
import { getCoin } from "@/apis/oasisbot/coin";
import exchangeAtom from "@/datas/exchange";
import { getTransaction } from "@/apis/oasisbot/getTransaction";

export function useBot() {
  const queryClient = useQueryClient();
  const startBotMutation = useMutation({
    mutationFn: botStart,
    mutationKey: ["startBot"],
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
    queryKey: ["getBot", exchange],
    queryFn: () => getBot(exchange),
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
  });

  const transactionQuery = useQuery({
    queryKey: ["getTransaction", exchange],
    queryFn: () => getTransaction(exchange),
  });

  return {
    coinQuery,
    transactionQuery,
  };
}
