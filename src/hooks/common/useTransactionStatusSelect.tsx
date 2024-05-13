import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import CustomSelect from "@/components/common/CustomSelect";

function useTransactionStatusSelect() {
  const [transactionStatus, setTransactionStatus] = useState<string>("");

  function TransactionStatusSelect() {
    return (
      <CustomSelect
        label="전체(판매,구매)"
        options={[
          { value: "sell", label: "판매" },
          { value: "buy", label: "구매" },
        ]}
        state={transactionStatus}
        setState={setTransactionStatus}
        indicator={KeyboardArrowDown}
      />
    );
  }
  return { transactionStatus, TransactionStatusSelect };
}

export default useTransactionStatusSelect;
