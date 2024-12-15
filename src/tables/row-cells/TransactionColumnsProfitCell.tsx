import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ProfitChip from "@/components/chip/ProfitChip";

function TransactionColumnsProfitCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionProfit>,
) {
  return (
    <div>
      <div
        className={`whitespace-normal ${params.value?.profitLoss && params.value.profitLoss > 0 ? "text-sub-3" : ""}`}
      >
        {params.value?.profitLoss ? "￦" : ""}
        <span className="text-ellipsis font-bold">
          {params.value?.profitLoss.toLocaleString("ko-kr") ?? "-"}
        </span>
      </div>
      {params.value?.profitLossRate && <ProfitChip rate={params.value?.profitLossRate} />}
    </div>
  );
}

export default TransactionColumnsProfitCell;
