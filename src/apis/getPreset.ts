import api from "./network";

interface PresetType {
  id: number;
  presetName: string;
  indicatorName: string;
  presetData: string;
  position: string;
  profitCutRate: number;
  lossCutRate: number;
}
export default function getPreset(): Promise<PresetType[]> {
  return api.get("/preset").then(res => {
    return res.data?.data;
  });
}
