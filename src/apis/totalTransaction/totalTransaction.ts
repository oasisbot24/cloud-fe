import api from "@/apis/network";

interface TotalTransactionType {
  botId: number;
  open: {
    exchangeName: string;
    date: string;
    price: number;
  };
  close: {
    exchangeName: string;
    date: string;
    price: number;
  };
  coinName: string;
  preset: {
    presetName: string;
    indicatorName: string;
    presetData: string;
    position: string;
    profitCutRate: number;
    lossCutRate: number;
  };
}

async function getTotalTransaction(): Promise<
  ApiResponseType<TotalTransactionType[]>
> {
  const res =
    await api.get<ApiResponseType<TotalTransactionType[]>>(
      "/total_transaction",
    );
  return res.data;
}

export { getTotalTransaction };
