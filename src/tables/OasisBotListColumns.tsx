import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import TimeConvert from "@/components/table/timeConvert";
import IsRunningStatusCell from "@/tables/row-cells/IsRunningCell";
import PresetNameCell from "@/tables/row-cells/PresetNameCell";
import StartBalanceCell from "@/tables/row-cells/StartBalanceCell";

const OasisBotListColumns: GridColDef[] = [
  {
    field: "presetName",
    headerName: "프리셋 이름",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["presetName"]>) => (
      <PresetNameCell {...params} />
    ),
  },
  {
    field: "startBalance",
    headerName: "실행 금액",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["startBalance"]>) => (
      <StartBalanceCell {...params} />
    ),
  },
  {
    field: "runningTime",
    headerName: "운영 기간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["runningTime"]>) => (
      <div className="whitespace-normal">{TimeConvert(Number(params.value))}</div>
    ),
  },
  {
    field: "coinType",
    headerName: "종목",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["coinType"]>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "isRunning",
    headerName: "상태",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["isRunning"]>) => (
      <IsRunningStatusCell {...params} />
    ),
  },
];

export default OasisBotListColumns;
