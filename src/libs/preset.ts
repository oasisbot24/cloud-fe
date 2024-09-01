import { PresetWeightType } from "@/datas/preset";

function presetDataToPresetWeight(presetData: string): PresetWeightType {
  const presetDataJson = JSON.parse(presetData);
  const presetWeight: PresetWeightType = {
    카운팅1: presetDataJson.counting1 ?? 0,
    카운팅2: presetDataJson.counting2 ?? 0,
    카운팅3: presetDataJson.counting3 ?? 0,
    카운팅4: presetDataJson.counting4 ?? 0,
    카운팅5: presetDataJson.counting5 ?? 0,
    카운팅6: presetDataJson.counting6 ?? 0,
    카운팅7: presetDataJson.counting7 ?? 0,
    카운팅8: presetDataJson.counting8 ?? 0,
    카운팅9: presetDataJson.counting9 ?? 0,
    카운팅10: presetDataJson.counting10 ?? 0,
    카운팅11: presetDataJson.counting11 ?? 0,
    카운팅12: presetDataJson.counting12 ?? 0,
  };
  return presetWeight;
}

function presetWeightToPresetData(presetWeight: PresetWeightType): string {
  const presetData = {
    counting1: presetWeight.카운팅1 ?? 0,
    counting2: presetWeight.카운팅2 ?? 0,
    counting3: presetWeight.카운팅3 ?? 0,
    counting4: presetWeight.카운팅4 ?? 0,
    counting5: presetWeight.카운팅5 ?? 0,
    counting6: presetWeight.카운팅6 ?? 0,
    counting7: presetWeight.카운팅7 ?? 0,
    counting8: presetWeight.카운팅8 ?? 0,
    counting9: presetWeight.카운팅9 ?? 0,
    counting10: presetWeight.카운팅10 ?? 0,
    counting11: presetWeight.카운팅11 ?? 0,
    counting12: presetWeight.카운팅12 ?? 0,
  };
  return JSON.stringify(presetData);
}

export { presetDataToPresetWeight, presetWeightToPresetData };
