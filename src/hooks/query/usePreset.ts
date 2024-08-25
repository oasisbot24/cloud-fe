import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  PresetBody,
  deletePreset,
  getPreset,
  postPreset,
  putPreset,
} from "@/apis/preset/preset";

export function usePresetQuery() {
  const presetQuery = useQuery({
    queryKey: ["getPreset"],
    queryFn: getPreset,
    select: data =>
      data.map(item => ({
        label: item.presetName,
        value: item.id,
      })),
  });

  return {
    presetQuery,
  };
}

export function usePresetMutation() {
  const queryClient = useQueryClient();
  const postPresetMutation = useMutation({
    mutationFn: postPreset,
    mutationKey: ["postPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const putPresetMutation = useMutation({
    mutationFn: ({ id, body }: { id: number; body: PresetBody }) =>
      putPreset(id, body),
    mutationKey: ["putPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const deletePresetMutation = useMutation({
    mutationFn: deletePreset,
    mutationKey: ["delete"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  return {
    postPresetMutation,
    putPresetMutation,
    deletePresetMutation,
  };
}
