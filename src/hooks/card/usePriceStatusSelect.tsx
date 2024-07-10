import React, { useState } from "react";
import { UnfoldMore } from "@mui/icons-material";
import CardHeaderSelect from "@/components/common/CardHeaderSelect";

function usePriceStatusSelect() {
  const [priceStatus, setPriceStatus] = useState<string>("current");

  function PriceStatusSelect() {
    return (
      <CardHeaderSelect
        options={[
          { value: "current", label: "현재가" },
          { value: "future", label: "미래가" },
        ]}
        state={priceStatus}
        setState={setPriceStatus}
        indicator={UnfoldMore}
      />
    );
  }

  return { priceStatus, PriceStatusSelect };
}

export default usePriceStatusSelect;
