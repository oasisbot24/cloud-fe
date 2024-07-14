import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { botStart, botStop, getBot } from "@/apis/oasisbot/bot";
import { getCoin } from "@/apis/oasisbot/coin";
import { getTransaction } from "@/apis/oasisbot/transaction";

export function useBotMutation() {
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

export function useBotQuery(exchangeName: string) {
  const botQuery = useQuery({
    queryKey: ["getBot", exchangeName],
    queryFn: () => getBot(exchangeName),
  });

  return {
    botQuery,
  };
}

export function useBotInfo(exchangeName: string) {
  const coinQuery = useQuery({
    queryKey: ["getCoin", exchangeName],
    queryFn: () => getCoin(exchangeName),
  });

  const transactionQuery = useQuery({
    queryKey: ["getTransaction", exchangeName],
    queryFn: () => getTransaction(exchangeName),
  });

  return {
    coinQuery,
    transactionQuery,
  };
}
