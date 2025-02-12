import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import SellBuyChip from "@/components/chip/SellBuyChip";
import TransactionColumnsMarketCell from "@/tables/row-cells/MarketCell";
import TransactionColumnsProfitCell from "@/tables/row-cells/TransactionColumnsProfitCell";

const OasisBotTransactionCompactColumns: GridColDef[] = [
  {
    field: "market",
    headerName: "거래소",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ExchangeType>) => (
      <TransactionColumnsMarketCell {...params} />
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
      <TransactionColumnsProfitCell {...params} />
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
