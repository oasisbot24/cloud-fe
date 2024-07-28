import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getTransaction } from "@/apis/oasisbot/getTransaction";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import useMarketSelect from "@/hooks/card/useMarketSelect";
import { exchangeToKorean } from "@/libs/string";
import ExchangeIcon from "../Icon/ExchangeIcon";

function useOasisBotTransactionColumns() {
  const { market } = useMarketSelect();

  const columns: GridColDef[] = [
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
        <Chip
          label={params.value === "sell" ? "판매" : "구매"}
          // color={params.value === "sell" ? "secondary" : "primary"}
          sx={
            params.value === "sell"
              ? { bgcolor: "#898FC3" }
              : { bgcolor: "#2BB7F5" }
          }
          className="text-[14px] font-bold leading-[16px] text-white"
        />
      ),
    },
    {
      field: "quantity",
      headerName: "매수·매도가 및 수량",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, BotTransactionQuantity>,
      ) => (
        <div>
          <div className="text-[16px] font-bold leading-[18px] ">
            ￦{params.value?.totalPrice.toLocaleString("ko-kr")}
          </div>

          <div className="text-[14px] font-bold leading-[16px] mt-2">
            {params.value?.volume}
          </div>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "설정매수·매도가",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, BotTransactionPrice>,
      ) => (
        <div>
          <div className="text-[16px] font-bold leading-[18px]">
            ￦{params.value?.startBalance.toLocaleString("ko-kr")}
          </div>
          <div className="whitespace-normal mt-2">
            {params.value?.presetName}
          </div>
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

  const { data: OasisBotTransactionCompactRows, isLoading: isLoading } =
    useQuery({
      queryKey: ["transaction", market],
      queryFn: () => getTransaction(market),
    });

  return { columns, OasisBotTransactionCompactRows, isLoading };
}

export default useOasisBotTransactionColumns;
