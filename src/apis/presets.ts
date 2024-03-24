import api from "@/apis/network";
import { Preset } from "@/datas/preset";

function getPresets() {
  return api
    .get("/preset")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function getIndicators() {
  return api
    .get("/indicator")
    .then(res => res.data.data)
    .catch(err => {
      console.error(err);
      return [];
    });
}

function addNewPreset() {
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
    })
    .catch(err => {
      console.error(err);
    });
}

function updatePreset(presetId: string, body: Preset) {
  return api
    .put(`/preset/${presetId}`, body)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}

export { getPresets, getIndicators, addNewPreset, updatePreset };
