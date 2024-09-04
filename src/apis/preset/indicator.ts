import api from "@/apis/network";

interface IndicatorType {
  id: number;
  indicatorName: string;
}
async function getIndicator(exchange: string): Promise<IndicatorType[]> {
  const res = await api.get<ApiResponseType<IndicatorType[]>>(
    `/indicator?exchange=${exchange}`,
  );
  return res.data?.data;
}

export { getIndicator };
export type { IndicatorType };
