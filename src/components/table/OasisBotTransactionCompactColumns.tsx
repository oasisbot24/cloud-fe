import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import { exchangeToKorean } from "@/libs/string";
import ExchangeIcon from "../Icon/ExchangeIcon";

const OasisBotTransactionCompactColumns: GridColDef[] = [
  {
    field: "market",
    headerName: "거래소",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, ExchangeType>,
    ) => (
      <div className="flex justify-between w-full whitespace-normal">
        {exchangeToKorean(params.value)}
        <ExchangeIcon exchange={params.value} size={20} />
      </div>
    ),
  },
  {
    field: "item",
    headerName: "종목",
    flex: 1,
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
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, BotTransactionProfit>,
    ) => (
      <div>
        <div
          className={`whitespace-normal ${params.value?.profitLoss && params.value.profitLoss > 0 ? "text-sub-3" : ""}`}
        >
          {params.value?.profitLoss ? "￦" : ""}
          <span className="font-bold text-ellipsis">
            {params.value?.profitLoss.toLocaleString("ko-kr") ?? "-"}
          </span>
        </div>
        {params.value?.profitLossRate && (
          <Chip
            className={`font-bold ${params.value?.profitLossRate ? "text-sub-3" : "bg-brand"}`}
            icon={
              params.value?.profitLossRate > 0 ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )
            }
            label={`${params.value?.profitLossRate}%`}
            size="small"
            style={{
              background:
                params.value?.profitLossRate > 0 ? "#FDE0E0" : "#DCE1FF",
            }}
          />
        )}
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
      <Chip
        label={params.value === "sell" ? "판매" : "구매"}
        color={params.value === "sell" ? "secondary" : "primary"}
      />
    ),
  },
];

const OasisBotTransactionCompactMockRows = [
  {
    id: 1,
    market: "upbit",
    item: "STARXEA USDT",
    profit: {
      profitLoss: 1000000000,
      profitLossRate: 11,
    },
    tradeTime: "2024.03.29 15:03",
    status: "sell",
  },
  {
    id: 2,
    market: "upbit",
    item: "STARXEA USDT",
    profit: null,
    tradeTime: "2024.03.29 15:03",
    status: "buy",
  },
  {
    id: 3,
    market: "upbit",
    item: "STARXEA USDT",
    profit: {
      profitLoss: 1000000000,
      profitLossprofitLossRate: 11,
    },
    tradeTime: "2024.03.29 15:03",
    status: "sell",
  },
  {
    id: 4,
    market: "upbit",
    item: "STARXEA USDT",
    profit: {
      profitLoss: 1000000000,
      profitLossRate: 11,
    },
    tradeTime: "2024.03.29 15:03",
    status: "sell",
  },
  {
    id: 5,
    market: "upbit",
    item: "STARXEA USDT",
    profit: {
      profitLoss: 1000000000,
      profitLossRate: 11,
    },
    tradeTime: "2024.03.29 15:03",
    status: "sell",
  },
];

export default OasisBotTransactionCompactColumns;
export { OasisBotTransactionCompactMockRows };
