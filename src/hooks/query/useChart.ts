import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { getCoinRatio } from "@/apis/chart/coinRatio";
import exchangeAtom from "@/datas/exchange";

export function useChart() {
  const [exchange] = useAtom(exchangeAtom);
  const coinRatioQuery = useQuery({
    queryKey: ["coinRatio", exchange],
    queryFn: () => getCoinRatio(exchange),
  });
  return { coinRatioQuery };
}
