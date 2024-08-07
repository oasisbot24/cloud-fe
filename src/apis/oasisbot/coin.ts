import api from "@/apis/network";

interface CoinType {
  id: number;
  coinName: string;
}

async function getCoin(exchange: string): Promise<CoinType[]> {
  const res = await api.get<ApiResponseType<CoinType[]>>("/coin", {
    params: { exchange },
  });
  return res.data.data;
}

export { getCoin };
export type { CoinType };
