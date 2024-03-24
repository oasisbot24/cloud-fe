import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewPreset,
  getIndicators,
  getPresets,
  updatePreset,
} from "@/apis/presets";
import { Indicator, Preset } from "@/datas/preset";

function usePreset() {
  const queryClient = useQueryClient();

  const { data: presetData, isLoading: isPresetLoading } = useQuery({
    queryKey: ["presets"],
    queryFn: getPresets,
  });

  const { data: indicators, isLoading: isIndicatorsLoading } = useQuery({
    queryKey: ["indicators"],
    queryFn: getIndicators,
    select: data =>
      data.map((item: Indicator) => ({ value: item.indicatorName })),
  });

  const addPresetMutation = useMutation({
    mutationFn: addNewPreset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  const updatePresetMutation = useMutation({
    mutationFn: ({ presetId, body }: { presetId: string; body: Preset }) =>
      updatePreset(presetId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  return {
    presetData,
    isPresetLoading,
    indicators,
    isIndicatorsLoading,
    addPresetMutation,
    updatePresetMutation,
  };
}

export default usePreset;
