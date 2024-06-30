import api from "@/apis/network";



interface BotType {
  coinName:string,
  date:string,
  exchane:string,
  position:string,
  presetName: string;
  profitLoss: number;
  profitLossRate:number;
  startBalance: number;
  totalPrice: number;
}

async function getTransaction(exchangeName: string): Promise<BotType[]> {
  const res = await api.get<ApiResponseType<BotType[]>>(
    `/transaction?exchange=${exchangeName}`,
  );

  return res.data?.data 
}

export type { BotType };
export { getTransaction };

