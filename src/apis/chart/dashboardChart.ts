import api from "@/apis/network";



interface ChartType {
  botId: number;
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
  chartData: {
    date: string[];
    price: number[];
  }
}



async function getDashboardChart() :Promise<ChartType[]>{
  const respose = await api.get<ApiResponseType<[]>>(
    `/chart`,
  );

  const charts:ChartType[] = [];

  respose.data?.data.map((item,n)=>{
    const dateArr: string[] = [];
    const priceArr: number[] = [];
    
    ( item["chartData"] as [] ).map((data)=>{
      dateArr.push(data["date"])
      priceArr.push(data["price"])
    })
 
    const type : ChartType = {
      botId: item["botId"],
      coinName: item["coinName"],
      presetName: item["presetName"],
      totalProfit: item["totalProfit"],
      totalProfitRate: item["totalProfitRate"],
      chartData: {
        date: dateArr,
        price: priceArr
      }
    }

    charts.push(type)
  })

  return charts; 
}


export { getDashboardChart };

