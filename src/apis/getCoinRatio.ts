import api from "@/apis/network";

export interface CoinRatio {
  name: string;
  price: number;
  ratio: number;
}

export default async function getTradeStyle(
  exchangeName: string,
): Promise<CoinRatio[]> {
  const res = await api.get<ApiResponseType<CoinRatio[]>>("/coin_ratio", {
    params: {
      exchange: exchangeName,
    },
  });
  return res.data.data;
}
