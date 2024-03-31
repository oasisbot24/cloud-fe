import api from "@/apis/network";
import { Indicator, Preset } from "@/datas/preset";
import { Response } from "@/datas/response";

function getPresets(): Promise<Preset[]> {
  return api.get("/preset").then(res => {
    return res.data.data;
  });
}

function getIndicators(): Promise<Indicator[]> {
  return api.get("/indicator").then(res => res.data.data);
}

function addNewPreset(): Promise<void | Response> {
  return api
    .post("/preset", {
      presetName: "신규 프리셋",
      indicatorName: "TD_Sequential",
      presetData: "",
      position: "long",
      profitCutRate: 0.2,
      lossCutRate: -1.0,
    })
    .then(res => {
      console.log(res);
    });
}

function updatePreset(
  presetId: string,
  body: Preset,
): Promise<void | Response> {
  return api.put(`/preset/${presetId}`, body).then(res => {
    console.log(res);
  });
}

function removePreset(presetId: string): Promise<void | Response> {
  return api.delete(`/preset/${presetId}`).then(res => {
    console.log(res);
  });
}

export { getPresets, getIndicators, addNewPreset, updatePreset, removePreset };
