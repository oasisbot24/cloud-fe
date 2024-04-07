import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import botStart from "@/apis/botStart";
import botStop from "@/apis/botStop";
import getBot from "@/apis/getBot";
import getCoin from "@/apis/getCoin";
import getPreset from "@/apis/getPreset";

export default function useBot() {
  const queryClient = useQueryClient();
  const stratBotMutation = useMutation({
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

  const dataPreset = useQuery({
    queryKey: ["getPreset"],
    queryFn: getPreset,
  });

  const dataCoin = useQuery({
    queryKey: ["getCoin"],
    queryFn: getCoin,
  });

  const dataBot = useQuery({
    queryKey: ["getBot"],
    queryFn: getBot,
  });

  return {
    stratBotMutation,
    stopBotMutation,
    dataPreset,
    dataCoin,
    dataBot,
  };
}
