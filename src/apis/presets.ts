import api from "@/apis/network";

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

export { getPresets, addNewPreset };
