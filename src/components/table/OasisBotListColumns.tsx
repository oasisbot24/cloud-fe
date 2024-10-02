import { IconButton } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { BotType } from "@/apis/oasisbot/bot";
import Icon from "../Icon";
import CustomSwitch from "../common/CustomSwitch";
import TimeConvert from "./timeConvert";

const OasisBotListColumns: GridColDef[] = [
  {
    field: "presetName",
    headerName: "프리셋 이름",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, BotType["presetName"]>,
    ) => (
      <div className="flex items-center">
        <div className="w-4/5 whitespace-normal">{params.value}</div>
        <IconButton sx={{ width: "24px", height: "24px" }}>
          <Icon src="/icons/basic/setting.png" size={24} />
        </IconButton>
      </div>
    ),
  },
  {
    field: "startBalance",
    headerName: "실행 금액",
    flex: 1,
    headerClassName: "text-slate-500",
  },
  {
    field: "runningTime",
    headerName: "운영 기간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, BotType["runningTime"]>,
    ) => (
      <div className="whitespace-normal">
        {TimeConvert(Number(params.value))}
      </div>
    ),
  },
  {
    field: "coinType",
    headerName: "종목",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, BotType["coinType"]>,
    ) => <div className="whitespace-normal">{params.value}</div>,
  },
  {
    field: "isRunning",
    headerName: "상태",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, BotType["isRunning"]>,
    ) => <CustomSwitch defaultChecked={params.value} />,
  },
];

export default OasisBotListColumns;
