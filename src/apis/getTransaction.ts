import api from "@/apis/network";



interface BotType {
  id:number,
  market:string,
  tradeTime:string,
  coinName:string,
  status:string,
  quantity:{
    totalPrice:number,
    volume:number
  },
  price:{
    startBalance:number,
    presetName:string,
  },
  profit:{
    profitLoss:number,
    profitLossRate:number
  }
  
}




async function getTransaction(exchangeName: string): Promise<BotType[]> {
  const respose = await api.get<ApiResponseType<[]>>(
    `/transaction?exchange=${exchangeName}`,
  );

  const bots:BotType[] = [];
  respose.data?.data.map((item,n)=>{
  
    const type : BotType = {
      id: n + 1,
      market: item["exchange"],
      tradeTime: item["date"],
      coinName: item["coinName"],
      status: item["position"] === "open"? "buy":"sell",
      quantity: {
        totalPrice: item["totalPrice"],
        volume: item["volume"]
      },
      price: {
        startBalance: item["startBalance"],
        presetName: item["presetName"]
      },
      profit: {
        profitLoss: item["profitLoss"],
        profitLossRate: item["profitLossRate"]
      }
    }

    bots.push(type)
  })

  return bots 
}

export type { BotType };
export { getTransaction };

