import { useQuery } from "@tanstack/react-query";
import { getCoinRatio } from "@/apis/chart/coinRatio";

export function useChart(exchangeName: string) {
  const coinRatioQuery = useQuery({
    queryKey: ["coinRatio", exchangeName],
    queryFn: () => getCoinRatio(exchangeName),
  });
  return { coinRatioQuery };
}
