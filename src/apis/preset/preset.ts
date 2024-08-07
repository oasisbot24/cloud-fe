import api from "@/apis/network";

interface PresetType extends PresetBody {
  id: number;
  // TODO: Define PresetType interface
}
async function getPreset(): Promise<PresetType[]> {
  const res = await api.get<ApiResponseType<PresetType[]>>("/preset");
  return res.data?.data;
}

interface PresetBody {
  presetName: string;
  indicatorName: string;
  presetData: string;
  // { [key: string]: string | number | boolean; };
  position: string;
  profitCutRate: number;
  lossCutRate: number;
}

async function postPreset(body: PresetBody): Promise<void> {
  await api.post<ApiResponseType<void>>("/preset", body);
}

async function putPreset(id: number, body: PresetBody): Promise<void> {
  await api.put<ApiResponseType<void>>(`/preset/${id}`, body);
}

async function deletePreset(id: number): Promise<void> {
  await api.delete<ApiResponseType<void>>(`/preset/${id}`);
}

export { getPreset, postPreset, putPreset, deletePreset };
export type { PresetType, PresetBody };
