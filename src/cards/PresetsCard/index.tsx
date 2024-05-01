import React from "react";
import Image from "next/image";
import {
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CustomSwitch from "@/components/CustomSwitch";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";

const columns: GridColDef[] = [
  {
    field: "presetName",
    headerName: "프리셋 이름",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="flex items-center">
        <div className="w-4/5 whitespace-normal">{params.value}</div>
        <IconButton sx={{ width: "24px", height: "24px" }}>
          <Image
            src="/icons/basic/setting.png"
            alt="세팅"
            width={24}
            height={24}
          />
        </IconButton>
      </div>
    ),
  },
  {
    field: "executeBudget",
    headerName: "실행 금액",
    flex: 1,
    headerClassName: "text-slate-500",
  },
  {
    field: "operationPeriod",
    headerName: "운영 기간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "stockItem",
    headerName: "종목",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "status",
    headerName: "상태",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, boolean>) => (
      <CustomSwitch defaultChecked={params.value} />
    ),
  },
];

const rows = [
  {
    id: 1,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: true,
  },
  {
    id: 2,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: true,
  },
  {
    id: 3,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 4,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 5,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 6,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
];

function PresetsCard() {
  const [priceStatus, PriceStatusSelect] = usePriceStatusSelect();
  const [currency, CurrencySelect] = useCurrencySelect();
  const [market, MarketSelect] = useMarketSelect();

  return (
    <Card>
      <CardHeader
        avatar={
          <div className="w-11 h-11 rounded-xl bg-slate-100 flex justify-center items-center">
            <Image
              src="/icons/dashboard/setting.png"
              alt="프리셋 세팅"
              width={36}
              height={30}
            />
          </div>
        }
        title="실행중인 프리셋 목록"
        subheader="오늘 16:29 기준" // 추후 날짜/시간 라이브러리 사용해 수정할 것
        action={
          <>
            <PriceStatusSelect />
            <CurrencySelect />
            <MarketSelect />
          </>
        }
        titleTypographyProps={{
          fontSize: "16px",
          fontWeight: 700,
        }}
        subheaderTypographyProps={{
          color: "#B0B3B7",
          fontSize: "12px",
        }}
      />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
      <CardActions className="flex justify-center mt-3">
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardActions>
    </Card>
  );
}

export default PresetsCard;
