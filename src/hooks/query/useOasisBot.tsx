import { useRouter } from "next/router";

import { GridRowId } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAtom, useAtomValue } from "jotai";

import BotValidationDialog from "@/components/dialog/BotValidationDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import exchangeAtom from "@/datas/exchange";
import api from "@/libs/network";

export function useBot() {
  // const queryClient = useQueryClient();
  const { reload } = useRouter();
  const exchange = useAtomValue(exchangeAtom);
  const { openDialog } = useDialogGlobal();

  const startBotMutation = useMutation({
    mutationFn: async ({ body }: RequestT<Bot.PostBotStartBody>) =>
      api.post<ResponseT<void>>("/start_bot", body, {
        params: { exchange },
      }),
    mutationKey: ["startBot", exchange],
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["getBot", exchange] });
      reload();
    },
    onError: e => {
      if (e instanceof AxiosError) {
        openDialog(
          <BotValidationDialog code={e.response?.data.code} message={e.response?.data.msg} />,
        );
      }
    },
  });

  const stopBotMutation = useMutation({
    mutationFn: async (id: number) => api.post<ResponseT<void>>(`/stop_bot/${id}`),
    mutationKey: ["stopBot"],
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["getBotDetail"] });
      reload();
    },
  });

  const restartBotMutation = useMutation({
    mutationFn: async (id: number) => api.post<ResponseT<void>>(`/restart_bot/${id}`),
    mutationKey: ["restartBot"],
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["getBotDetail"] });
      reload();
    },
    onError: e => {
      if (e instanceof AxiosError) {
        openDialog(
          <BotValidationDialog code={e.response?.data.code} message={e.response?.data.msg} />,
        );
      }
    },
  });

  return {
    startBotMutation,
    stopBotMutation,
    restartBotMutation,
  };
}

export function useBotQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const botListQuery = useQuery({
    queryKey: ["getBot", exchange || "all"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Bot.InfoT[]>>("/bot", {
        params: { exchange: exchange || "all" },
      });
      return res.data.data;
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
      const res = await api.get<ResponseT<Bot.InfoT[]>>("/bot", {
        params: { exchange: exchange || "all" },
      });
      return res.data?.data;
    },
    select: data => data.find(item => item.id === botId),
    refetchOnMount: false,
    initialData: undefined,
  });

  return { botDetailQuery };
}

async function getTransaction(exchange: string): Promise<Bot.TransactionT[]> {
  const respose = await api.get<ResponseT<Bot.TransactionResponseT[]>>("/transaction", {
    params: { exchange },
  });

  const bots: Bot.TransactionT[] = respose.data?.data.map((item, n) => {
    const type: Bot.TransactionT = {
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
    return type;
  });

  return bots;
}

export function useBotInfo() {
  const [exchange] = useAtom(exchangeAtom);
  const coinQuery = useQuery({
    queryKey: ["getCoin", exchange],
    queryFn: async () => {
      const res = await api.get<ResponseT<Common.CoinT[]>>("/coin", {
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
      const res = await api.get<ResponseT<Account.AvailableBalanceT>>("/available-balance", {
        params: { exchange },
      });

      return res.data.data;
    },
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
    queryFn: async () => {
      const res = await api.get<ResponseT<Account.BotResultDataT>>("/bot-data", {
        params: { exchange },
      });
      return res.data.data;
    },
  });

  return { botDataQuery };
}
