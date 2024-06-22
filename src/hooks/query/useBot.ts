import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { botStart, botStop, getBot } from "@/apis/bot";

export default function useBot() {
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

  const botQuery = useQuery({
    queryKey: ["bot"],
    queryFn: getBot,
  });

  return {
    startBotMutation,
    stopBotMutation,
    botQuery,
  };
}
