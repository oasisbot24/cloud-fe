import api from "@/apis/network";

export interface RankingType {
  rank: number;
  userName: string;
  exchangeName: string;
  coinName: string;
  profitLossRate: number;
  duration: number;
  presetData: string;
}

async function getRanking(period: 1 | 30 | 180 | 365): Promise<RankingType[]> {
  const res = await api.get<ApiResponseType<RankingType[]>>("/ranking", {
    params: { period },
  });
  const result: RankingType[] = res.data.data;
  return result;
}

export { getRanking };
