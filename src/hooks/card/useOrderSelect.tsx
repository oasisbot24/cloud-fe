import React, { useState } from "react";

import { UnfoldMore } from "@mui/icons-material";

import CardHeaderSelect from "@/hooks/card/CardHeaderSelect";

function useOrderSelect() {
  const [order, setOrder] = useState<string>("latest");

  function OrderSelect() {
    return (
      <CardHeaderSelect
        options={[{ value: "latest", label: "최신순" }]}
        state={order}
        setState={setOrder}
        indicator={UnfoldMore}
      />
    );
  }
  return { order, OrderSelect };
}

export default useOrderSelect;
