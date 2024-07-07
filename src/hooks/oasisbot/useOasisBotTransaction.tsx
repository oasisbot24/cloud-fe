import Image from "next/image";
import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getTransaction } from "@/apis/getTransaction";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import {
  BotTransactionPrice,
  BotTransactionProfit,
  BotTransactionQuantity,
} from "@/datas/oasisbotTransaction";
import useMarket from "@/hooks/common/useMarket";
import useMarketSelect from "../card/useMarketSelect";

function useOasisBotTransaction() {
  const { marketName, marketIcon } = useMarket();
  const { market } = useMarketSelect();

  const columns: GridColDef[] = [
    {
      field: "market",
      headerName: "거래소",
      flex: 0.8,
      headerClassName: "text-slate-500",
      renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
        <div className="flex justify-between w-full whitespace-normal">
          {marketName(params.value)}
          <Image
            src={marketIcon(params.value)}
            alt={params.value ?? ""}
            width={20}
            height={20}
          />
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
            ￦{params.value?.money.toLocaleString("ko-kr")}
          </div>

          <div className="text-[14px] font-bold leading-[16px] mt-2">
            {params.value?.rate}
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
            ￦{params.value?.money.toLocaleString("ko-kr")}
          </div>
          <div className="whitespace-normal mt-2">{params.value?.contents}</div>
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
            className={`whitespace-normal ${params.value?.money && params.value.money > 0 ? "text-sub-3" : ""}`}
          >
            {params.value?.money ? "￦" : ""}
            <span className="font-bold text-ellipsis">
              {params.value?.money.toLocaleString("ko-kr") ?? "-"}
            </span>
          </div>
          {params.value?.rate && (
            <Chip
              className={`font-bold ${params.value?.rate ? "text-sub-3" : "bg-brand"}`}
              icon={
                params.value?.rate > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />
              }
              label={`${params.value?.rate}%`}
              size="small"
              style={{
                background: params.value?.rate > 0 ? "#FDE0E0" : "#DCE1FF",
              }}
            />
          )}
        </div>
      ),
    },
  ];

  const { data: botrows, isLoading: isPresetsLoading } = useQuery({
    queryKey: ["transaction", market],
    queryFn: () => getTransaction(market),
  });

  const rows = [
    {
      id: 1,
      market: "upbit",
      item: "STARXEA USDT",
      status: "sell",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
    {
      id: 2,
      market: "upbit",
      item: "STARXEA USDT",
      status: "buy",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: null,
    },
    {
      id: 3,
      market: "upbit",
      item: "STARXEA USDT",
      status: "sell",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
    {
      id: 4,
      market: "upbit",
      item: "STARXEA USDT",
      status: "sell",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
    {
      id: 5,
      market: "upbit",
      item: "STARXEA USDT",
      status: "sell",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
    {
      id: 6,
      market: "upbit",
      item: "STARXEA USDT",
      status: "sell",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
    {
      id: 7,
      market: "upbit",
      item: "STARXEA USDT",
      status: "buy",
      quantity: {
        money: 1000000000,
        rate: 0.1,
      },
      price: {
        money: 1000000000,
        contents: "상승장프리셋임",
      },
      tradeTime: "2024.03.29 15:03",
      profit: {
        money: 1000000000,
        rate: 11,
      },
    },
  ];

  return { columns, rows };
}

export default useOasisBotTransaction;
