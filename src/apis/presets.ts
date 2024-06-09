import api from "./network";

interface PresetType {
  id: number;
  isRunning: boolean;
  presetName: string;
  startBalance: number;
  runningTime: number;
  coinType: string;
}

async function getPreset(exchangeName: string): Promise<PresetType[]> {
  const res = await api.get<ApiResponseType<PresetType[]>>(
    `/bot?exchange=${exchangeName}`,
  );
  return res.data?.data;
}

export type { PresetType };
export { getPreset };
