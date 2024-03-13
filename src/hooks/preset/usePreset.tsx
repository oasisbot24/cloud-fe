import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewPreset, getPresets } from "@/apis/presets";

function usePreset() {
  const queryClient = useQueryClient();

  const { data: presetData, isLoading: isPresetLoading } = useQuery({
    queryKey: ["presets"],
    queryFn: getPresets,
  });

  const mutation = useMutation({
    mutationFn: addNewPreset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  return { presetData, isPresetLoading, mutation };
}

export default usePreset;
