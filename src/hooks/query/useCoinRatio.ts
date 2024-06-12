import { useQuery } from "@tanstack/react-query";
import getCoinRatio from "@/apis/getCoinRatio";

export default function useCoinRatio(exchangeName: string) {
  const coinRatioQuery = useQuery({
    queryKey: ["coinRatio", exchangeName],
    queryFn: () => getCoinRatio(exchangeName),
  });
  return { coinRatioQuery };
}
