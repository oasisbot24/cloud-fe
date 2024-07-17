import { useState } from "react";
import { UnfoldMore } from "@mui/icons-material";
import CardHeaderSelect from "@/components/common/CardHeaderSelect";

function useCurrencySelect() {
  const [currency, setCurrency] = useState<string>("won");

  function CurrencySelect() {
    return (
      <CardHeaderSelect
        options={[
          { value: "won", label: "원화로" },
          { value: "dollar", label: "달러로" },
          { value: "yen", label: "엔화로" },
        ]}
        state={currency}
        setState={setCurrency}
        indicator={UnfoldMore}
      />
    );
  }

  return { currency, CurrencySelect };
}

export default useCurrencySelect;
