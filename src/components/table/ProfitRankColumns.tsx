import Image from "next/image";
import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { exchangeToKorean } from "@/libs/string";
import CoinIcon from "../Icon/CoinIcon";
import ExchangeIcon from "../Icon/ExchangeIcon";
import TimeConvert from "./timeConvert";

const ProfitRankColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "순위",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: index => index.api.getRowIndexRelativeToVisibleRows(index.row),
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
        <ExchangeIcon exchange={params.value} size={20} />
        {exchangeToKorean(params.value)}
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
        <CoinIcon coin={params.value} size={20} />
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
    ) => (
      <div className="whitespace-normal">
        {TimeConvert(Number(params.value))}
      </div>
    ),
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

// const ProfitRankMockRows: ProfitRank[] = [
//   {
//     id: 1,
//     user: {
//       icon: "",
//       nickname: "나카모토 사토시",
//     },
//     accumulatedProfit: 1000000000,
//     market: "upbit",
//     item: "BTC",
//     period: "365일 12시간",
//   },
//   {
//     id: 2,
//     user: {
//       icon: "",
//       nickname: "Winkelvoss쌍둥이",
//     },
//     accumulatedProfit: 1000000000,
//     market: "okx",
//     item: "ETH",
//     period: "365일 12시간",
//   },
//   {
//     id: 3,
//     user: {
//       icon: "",
//       nickname: "나카모토 사토시",
//     },
//     accumulatedProfit: 1000000000,
//     market: "upbit",
//     item: "BTC",
//     period: "365일 12시간",
//   },
//   {
//     id: 4,
//     user: {
//       icon: "",
//       nickname: "Winkelvoss쌍둥이",
//     },
//     accumulatedProfit: 1000000000,
//     market: "okx",
//     item: "ETH",
//     period: "365일 12시간",
//   },
//   {
//     id: 5,
//     user: {
//       icon: "",
//       nickname: "Winkelvoss쌍둥이",
//     },
//     accumulatedProfit: 1000000000,
//     market: "okx",
//     item: "ETH",
//     period: "365일 12시간",
//   },
// ];

export default ProfitRankColumns;
// export { ProfitRankMockRows };
