import api from "@/apis/network";

export interface RankingType {
  id:number;
  rank: number;
  user: {
    icon:string;
    nickname:string
  }
  market: string;
  item: string;
  accumulatedProfit: number;
  period: number;
  presetData: string;
}



async function getRanking(period: 1 | 30 | 180 | 365): Promise<RankingType[]> {
  const res = await api.get<ApiResponseType<[]>>("/ranking", {
    params: { period },
  });

  const result:RankingType[] = [];
  res.data?.data.map((data,n)=>{
  
    const type : RankingType = {
      id: n + 1,
      rank: data['rank'],
      user: {
        icon: "",
        nickname: data['userName'],
      },
      market: data['exchangeName'],
      item: data['coinName'],
      accumulatedProfit: data['profitLossRate'],
      period: data['duration'],
      presetData: ""
    }

    result.push(type)
  })

  return result 

}

export { getRanking };
