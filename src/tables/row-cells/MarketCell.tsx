import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { exchangeToKorean } from "@/libs/string";

function MarketCell(params: GridRenderCellParams<GridValidRowModel, ExchangeType>) {
  const { value } = params;

  return (
    <div className="flex w-full whitespace-normal">
      {exchangeToKorean(value)}
      <ExchangeIcon exchange={value} size={20} />
    </div>
  );
}

export default MarketCell;
