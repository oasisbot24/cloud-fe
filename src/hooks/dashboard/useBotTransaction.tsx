import React from "react";
import Image from "next/image";
import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import ArrowDownIcon from "@/components/Icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import { BotTransactionProfit } from "@/datas/botTransaction";

function useBotTransaction() {
  const marketName = (market: string | undefined) => {
    switch (market) {
      case "upbit":
        return "업비트";
      case "okx":
        return "OKX";
      default:
        return "";
    }
  };
  const marketIcon = (market: string | undefined): string => {
    switch (market) {
      case "upbit":
        return "/icons/crypto/upbit.png";
      case "okx":
        return "/icons/crypto/okx.png";
      default:
        return "";
    }
  };

  const columns: GridColDef[] = [
    {
      field: "market",
      headerName: "거래소",
      flex: 1,
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

  const rows = [
    {
      id: 1,
      market: "upbit",
      item: "STARXEA USDT",
      profit: {
        money: 1000000000,
        rate: 11,
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
        money: 1000000000,
        rate: 11,
      },
      tradeTime: "2024.03.29 15:03",
      status: "sell",
    },
    {
      id: 4,
      market: "upbit",
      item: "STARXEA USDT",
      profit: {
        money: 1000000000,
        rate: 11,
      },
      tradeTime: "2024.03.29 15:03",
      status: "sell",
    },
    {
      id: 5,
      market: "upbit",
      item: "STARXEA USDT",
      profit: {
        money: 1000000000,
        rate: 11,
      },
      tradeTime: "2024.03.29 15:03",
      status: "sell",
    },
  ];

  return { columns, rows };
}

export default useBotTransaction;
