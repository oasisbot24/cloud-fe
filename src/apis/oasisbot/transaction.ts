import api from "@/apis/network";

interface TransactionType {
  coinName: string;
  date: string;
  exchane: string;
  position: string;
  presetName: string;
  profitLoss: number;
  profitLossRate: number;
  startBalance: number;
  totalPrice: number;
}

async function getTransaction(exchange: string): Promise<TransactionType[]> {
  const res = await api.get<ApiResponseType<TransactionType[]>>(
    "/transaction",
    { params: { exchange } },
  );

  return res.data?.data;
}

export { getTransaction };
export type { TransactionType };
