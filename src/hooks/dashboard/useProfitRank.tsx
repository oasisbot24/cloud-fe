import React from "react";
import Image from "next/image";
import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import useMarket from "@/hooks/common/useMarket";
import useCoinItem from "../common/useCoinItem";

function useProfitRank() {
  const { marketName, marketIcon } = useMarket();
  const { coinIcon } = useCoinItem();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "순위",
      flex: 0.5,
      headerClassName: "text-slate-500",
      renderCell: index =>
        index.api.getRowIndexRelativeToVisibleRows(index.row),
    },
    {
      field: "user",
      headerName: "닉네임",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, ProfitRank["user"]>,
      ) => (
        <div className="flex justify-center items-center whitespace-normal">
          <div className="flex justify-center items-center rounded-full size-5 bg-neutral-300 mr-1">
            <Image
              src={params.value?.icon || "/user.png"}
              alt={params.value?.nickname ?? ""}
              width={20}
              height={20}
            />
          </div>
          {params.value?.nickname}
        </div>
      ),
    },
    {
      field: "accumulatedProfit",
      headerName: "누적수익금액",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<
          GridValidRowModel,
          ProfitRank["accumulatedProfit"]
        >,
      ) => (
        <div className="whitespace-normal">
          {params.value ? "￦" : ""}
          <span className="font-bold text-ellipsis">
            {params.value?.toLocaleString("ko-kr")}
          </span>
        </div>
      ),
    },
    {
      field: "market",
      headerName: "거래소",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, ProfitRank["market"]>,
      ) => (
        <div className="flex w-full whitespace-normal">
          <Image
            className="mr-1"
            src={marketIcon(params.value)}
            alt={params.value ?? ""}
            width={20}
            height={20}
          />
          {marketName(params.value)}
        </div>
      ),
    },
    {
      field: "item",
      headerName: "종목",
      flex: 0.5,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, ProfitRank["item"]>,
      ) => (
        <div className="whitespace-normal">
          <Image
            src={coinIcon(params.value)}
            alt={params.value ?? ""}
            width={9}
            height={16}
          />
        </div>
      ),
    },
    {
      field: "period",
      headerName: "운영기간",
      flex: 1,
      headerClassName: "text-slate-500",
      renderCell: (
        params: GridRenderCellParams<GridValidRowModel, ProfitRank["period"]>,
      ) => <div className="whitespace-normal">{params.value}</div>,
    },
    {
      field: "",
      headerName: "유저 프리셋",
      flex: 0.7,
      headerClassName: "text-slate-500",
      renderCell: () => (
        <Chip
          className="w-full mx-2 bg-neutral-600 hover:bg-brand text-white font-bold"
          label="복사"
          onClick={() => console.log("유저 프리셋 복사 버튼 클릭")}
        />
      ),
    },
  ];

  const rows: ProfitRank[] = [
    {
      id: 1,
      user: {
        icon: "",
        nickname: "나카모토 사토시",
      },
      accumulatedProfit: 1000000000,
      market: "upbit",
      item: "BTC",
      period: "365일 12시간",
    },
    {
      id: 2,
      user: {
        icon: "",
        nickname: "Winkelvoss쌍둥이",
      },
      accumulatedProfit: 1000000000,
      market: "okx",
      item: "ETH",
      period: "365일 12시간",
    },
    {
      id: 3,
      user: {
        icon: "",
        nickname: "나카모토 사토시",
      },
      accumulatedProfit: 1000000000,
      market: "upbit",
      item: "BTC",
      period: "365일 12시간",
    },
    {
      id: 4,
      user: {
        icon: "",
        nickname: "Winkelvoss쌍둥이",
      },
      accumulatedProfit: 1000000000,
      market: "okx",
      item: "ETH",
      period: "365일 12시간",
    },
    {
      id: 5,
      user: {
        icon: "",
        nickname: "Winkelvoss쌍둥이",
      },
      accumulatedProfit: 1000000000,
      market: "okx",
      item: "ETH",
      period: "365일 12시간",
    },
  ];

  return { columns, rows };
}

export default useProfitRank;
