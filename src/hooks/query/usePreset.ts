import { useMutation, useQuery } from "@tanstack/react-query";
import {
  PresetBody,
  deletePreset,
  getPreset,
  postPreset,
  putPreset,
} from "@/apis/preset/preset";

export function usePresetQuery() {
  const presetQuery = useQuery({
    queryKey: ["preset"],
    queryFn: () => getPreset(),
  });

  return {
    presetQuery,
  };
}

export function usePresetMutation() {
  const postPresetMutation = useMutation({
    mutationFn: postPreset,
    mutationKey: ["postPreset"],
  });
  const putPresetMutation = useMutation({
    mutationFn: ({ id, body }: { id: number; body: PresetBody }) =>
      putPreset(id, body),
    mutationKey: ["putPreset"],
  });
  const deletePresetMutation = useMutation({
    mutationFn: deletePreset,
    mutationKey: ["delete"],
  });
  return {
    postPresetMutation,
    putPresetMutation,
    deletePresetMutation,
  };
}
