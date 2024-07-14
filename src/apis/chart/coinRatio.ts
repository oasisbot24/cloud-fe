import api from "@/apis/network";

export interface CoinRatio {
  name: string;
  price: number;
  ratio: number;
}

async function getCoinRatio(exchange: string): Promise<CoinRatio[]> {
  const res = await api.get<ApiResponseType<CoinRatio[]>>("/coin_ratio", {
    params: { exchange },
  });
  return res.data.data;
}

export { getCoinRatio };
