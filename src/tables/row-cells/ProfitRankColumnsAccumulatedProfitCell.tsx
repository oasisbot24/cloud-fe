import React from "react";

import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function ProfitRankColumnsAccumulatedProfitCell(
  params: GridRenderCellParams<GridValidRowModel, ProfitRank["accumulatedProfit"]>,
) {
  return (
    <div className="whitespace-normal">
      {params.value ? "￦" : ""}
      <span className="text-ellipsis font-bold">{params.value?.toLocaleString("ko-kr")}</span>
    </div>
  );
}

export default ProfitRankColumnsAccumulatedProfitCell;
