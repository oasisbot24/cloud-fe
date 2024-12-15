import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import ProfitChip from "@/components/chip/ProfitChip";
import SellBuyChip from "@/components/chip/SellBuyChip";
import { exchangeToKorean } from "@/libs/string";

const OasisBotTransactionColumns: GridColDef[] = [
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
    field: "status",
    headerName: "거래",
    flex: 0.7,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <SellBuyChip value={params.value} sellColor="#898FC3" buyColor="#2BB7F5" />
    ),
  },
  {
    field: "quantity",
    headerName: "매수·매도가 및 수량",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotTransactionQuantity>) => (
      <div>
        <div className="text-[16px] font-bold leading-[18px]">
          ￦{params.value?.totalPrice.toLocaleString("ko-kr")}
        </div>

        <div className="mt-2 text-[14px] font-bold leading-[16px]">{params.value?.volume}</div>
      </div>
    ),
  },
  {
    field: "price",
    headerName: "설정매수·매도가",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotTransactionPrice>) => (
      <div>
        <div className="text-[16px] font-bold leading-[18px]">
          ￦{params.value?.startBalance.toLocaleString("ko-kr")}
        </div>
        <div className="mt-2 whitespace-normal">{params.value?.presetName}</div>
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
];

// const OasisBotTransactionCompactMockRows = [
//   {
//     id: 1,
//     market: "upbit",
//     item: "STARXEA USDT",
//     profit: {
//       money: 1000000000,
//       rate: 11,
//     },
//     tradeTime: "2024.03.29 15:03",
//     status: "sell",
//   },
//   {
//     id: 2,
//     market: "upbit",
//     item: "STARXEA USDT",
//     profit: null,
//     tradeTime: "2024.03.29 15:03",
//     status: "buy",
//   },
//   {
//     id: 3,
//     market: "upbit",
//     item: "STARXEA USDT",
//     profit: {
//       money: 1000000000,
//       rate: 11,
//     },
//     tradeTime: "2024.03.29 15:03",
//     status: "sell",
//   },
//   {
//     id: 4,
//     market: "upbit",
//     item: "STARXEA USDT",
//     profit: {
//       money: 1000000000,
//       rate: 11,
//     },
//     tradeTime: "2024.03.29 15:03",
//     status: "sell",
//   },
//   {
//     id: 5,
//     market: "upbit",
//     item: "STARXEA USDT",
//     profit: {
//       money: 1000000000,
//       rate: 11,
//     },
//     tradeTime: "2024.03.29 15:03",
//     status: "sell",
//   },
// ];

//   const { data: OasisBotTransactionCompactRows, isLoading: isLoading } =
//     useQuery({
//       queryKey: ["transaction", market],
//       queryFn: () => getTransaction(market),
//     });

//   return { columns, OasisBotTransactionCompactRows, isLoading };
// }

export default OasisBotTransactionColumns;
