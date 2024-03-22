import api from "./network";

export default function getCoin() {
  return api.get("/coin").then(res => {
    return res.data?.data;
  });
}
