import { useAtom } from "jotai";

import exchangeAtom from "@/datas/exchange";
import { exchangeToKorean } from "@/libs/string";

import Chip from ".";

export default function ExchangeChip() {
  const [exchange] = useAtom(exchangeAtom);

  return <Chip label={exchangeToKorean(exchange)} variant="outlined" className="text-brand" />;
}
