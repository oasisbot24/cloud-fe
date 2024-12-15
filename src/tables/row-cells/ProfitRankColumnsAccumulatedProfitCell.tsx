import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

function ProfitRankColumnsAccumulatedProfitCell(
  params: GridRenderCellParams<GridValidRowModel, ProfitRank["accumulatedProfit"]>,
) {
  const { value } = params;

  return (
    <div className="whitespace-normal">
      {value ? "￦" : ""}
      <span className="text-ellipsis font-bold">{value?.toLocaleString("ko-kr")}</span>
    </div>
  );
}

export default ProfitRankColumnsAccumulatedProfitCell;
