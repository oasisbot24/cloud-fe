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

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["startBot"] });
    },
  });

  const stopBotMutation = useMutation({
    mutationFn: botStop,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stopBot"] });
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
