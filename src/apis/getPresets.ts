import api from "@/apis/network";

export default function getPresets() {
  return api
    .get("/preset")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.error(err);
    });
}
