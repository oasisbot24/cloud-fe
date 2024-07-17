import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import CardHeaderSelect from "./CardHeaderSelect";

function useMarketSelect() {
  const [market, setMarket] = useState<string>("all");

  function MarketSelect() {
    return (
      <CardHeaderSelect
        label="거래소별 보기"
        options={[
          { value: "upbit", label: "업비트" },
          { value: "okx", label: "OKX" },
        ]}
        state={market}
        setState={setMarket}
        indicator={KeyboardArrowDown}
      />
    );
  }
  return { market, MarketSelect };
}

export default useMarketSelect;
