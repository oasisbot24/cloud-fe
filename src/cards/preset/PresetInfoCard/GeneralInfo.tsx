import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import exchangeAtom from "@/datas/exchange";
import { useInfoTradeStyle } from "@/hooks/query/useInfo";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";
import { numberSlice, numberToCurrency } from "@/libs/string";

interface GeneralInfoProps {
  type: "exchange" | "balance" | "subscribe";
}

const label = {
  exchange: "접속거래소",
  balance: "잔고",
  subscribe: "구독권",
};

export default function GeneralInfo({ type }: GeneralInfoProps) {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const {
    tradeStyleQuery: { data: tradeStyleData },
  } = useInfoTradeStyle();
  const [exchange] = useAtom(exchangeAtom);
  return (
    <Stack
      direction="row"
      className="w-full gap-8 h-[30px] items-center justify-between"
    >
      <Typography variant="100R" className="w-[60px] shrink-0 text-neutral-600">
        {label[type]}
      </Typography>
      <Stack
        direction="row"
        className="w-full h-full border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 items-center justify-end"
      >
        <Typography variant="200M" className="text-font-2">
          {type === "exchange"
            ? exchange.toUpperCase()
            : type === "balance"
              ? numberToCurrency(
                  numberSlice(tradeStyleData?.accountBalance, 2),
                  "₩",
                ) || "0"
              : subscribeData?.productName || "Free"}
        </Typography>
      </Stack>
    </Stack>
  );
}
