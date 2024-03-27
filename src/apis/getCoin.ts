import api from "./network";

interface CoinType {
  coinName: string;
  id: number;
}
export default function getCoin(): Promise<CoinType[]> {
  return api.get("/coin").then(res => {
    return res.data?.data;
  });
}
