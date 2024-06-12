import { useQuery } from "@tanstack/react-query";
import getTradeStyle from "@/apis/getTradeStyle";

export default function useTradeStyle() {
  const tradeStyleQuery = useQuery({
    queryKey: ["tradeStyle"],
    queryFn: getTradeStyle,
  });

  return { tradeStyleQuery };
}
