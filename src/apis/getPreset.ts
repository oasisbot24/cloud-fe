import api from "./network";

interface PrsetType {
  id: number;
  presetName: string;
  indicatorName: string;
  presetData: string;
  position: string;
  profitCutRate: number;
  lossCutRate: number;
}
export default function getPreset(): Promise<PrsetType[]> {
  return api.get("/preset").then(res => {
    return res.data?.data;
  });
}
