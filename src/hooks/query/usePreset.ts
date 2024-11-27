import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

import api from "@/apis/network";
import exchangeAtom from "@/datas/exchange";

interface PresetBody {
  presetName: string;
  indicatorName: string;
  presetData: string;
  position: string;
  profitCutRate: number;
  lossCutRate: number;
}
export interface PresetType extends PresetBody {
  id: number;
}
export function usePresetQuery() {
  const presetQuery = useQuery({
    queryKey: ["getPreset"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<PresetType[]>>("/preset");
      return res.data?.data;
    },
  });

  return {
    presetQuery,
  };
}

interface IndicatorType {
  id: number;
  indicatorName: string;
}
export function useIndicatorQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const indicatorQuery = useQuery({
    queryKey: ["getIndicator"],
    queryFn: async () => {
      const res = await api.get<ApiResponseType<IndicatorType[]>>(
        `/indicator?exchange=${exchange}`,
      );
      return res.data?.data;
    },
  });

  return {
    indicatorQuery,
  };
}

export function usePresetMutation() {
  const queryClient = useQueryClient();
  const postPresetMutation = useMutation({
    mutationFn: async (body: PresetBody) => api.post<ApiResponseType<void>>("/preset", body),
    mutationKey: ["postPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const putPresetMutation = useMutation({
    mutationFn: async ({ id, body }: { id: number; body: PresetBody }) =>
      api.put<ApiResponseType<void>>(`/preset/${id}`, body),
    mutationKey: ["putPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const deletePresetMutation = useMutation({
    mutationFn: async (id: number) => api.delete<ApiResponseType<void>>(`/preset/${id}`),
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
