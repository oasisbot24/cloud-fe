import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { exchangeToKorean } from "@/libs/string";

function MarketCell(params: GridRenderCellParams<GridValidRowModel, ExchangeType>) {
  return (
    <div className="flex w-full justify-between whitespace-normal">
      {exchangeToKorean(params.value)}
      <ExchangeIcon exchange={params.value} size={20} />
    </div>
  );
}

export default MarketCell;
