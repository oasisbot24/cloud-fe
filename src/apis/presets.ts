import api from "./network";

interface PresetType {
  id: number;
  isRunning: boolean;
  presetName: string;
  startBalance: number;
  runningTime: number;
  coinType: string;
}

const getPreset = (exchangeName: string): Promise<PresetType[]> => {
  return api.get(`/bot?exchange=${exchangeName}`).then(res => {
    return res.data?.data;
  });
};

export type { PresetType };
export { getPreset };
