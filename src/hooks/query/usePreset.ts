import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { getIndicator } from "@/apis/preset/indicator";
import {
  PresetBody,
  deletePreset,
  getPreset,
  postPreset,
  putPreset,
} from "@/apis/preset/preset";
import exchangeAtom from "@/datas/exchange";

export function usePresetQuery() {
  const presetQuery = useQuery({
    queryKey: ["getPreset"],
    queryFn: getPreset,
  });

  return {
    presetQuery,
  };
}

export function useIndicatorQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const indicatorQuery = useQuery({
    queryKey: ["getIndicator"],
    queryFn: () => getIndicator(exchange),
  });

  return {
    indicatorQuery,
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
