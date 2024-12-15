import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import ProfitChip from "@/components/chip/ProfitChip";
import SellBuyChip from "@/components/chip/SellBuyChip";
import { exchangeToKorean } from "@/libs/string";

const OasisBotTransactionCompactColumns: GridColDef[] = [
  {
    field: "market",
    headerName: "거래소",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ExchangeType>) => (
      <div className="flex w-full justify-between whitespace-normal">
        {exchangeToKorean(params.value)}
        <ExchangeIcon exchange={params.value} size={20} />
      </div>
    ),
  },
  {
    field: "coinName",
    headerName: "종목",
    flex: 0.7,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "profit",
    headerName: "손익률·실현손익",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotTransactionProfit>) => (
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
    ),
  },
  {
    field: "tradeTime",
    headerName: "거래 시간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "status",
    headerName: "거래",
    flex: 0.7,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <SellBuyChip value={params.value} sellColor="#898FC3" buyColor="#223CE9" />
    ),
  },
];

export default OasisBotTransactionCompactColumns;
