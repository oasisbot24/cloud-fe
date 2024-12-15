import React from "react";

import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function TransactionColumnsPriceCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionPrice>,
) {
  return (
    <div>
      <div className="text-[16px] font-bold leading-[18px]">
        ￦{params.value?.startBalance.toLocaleString("ko-kr")}
      </div>
      <div className="mt-2 whitespace-normal">{params.value?.presetName}</div>
    </div>
  );
}

export default TransactionColumnsPriceCell;
