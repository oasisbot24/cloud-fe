import { useRouter } from "next/router";

import { CircularProgress, IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";
import { useIsMutating } from "@tanstack/react-query";

import Icon from "@/components/Icon";
import CustomSwitch from "@/components/common/CustomSwitch";
import TimeConvert from "@/components/table/timeConvert";
import useBotCommand from "@/hooks/card/useBotCommand";
import { BotType, useBotDetailQuery } from "@/hooks/query/useOasisBot";

function IconButtonFun() {
  const { push } = useRouter();
  return (
    <IconButton sx={{ width: "24px", height: "24px" }} onClick={() => push("/preset")}>
      <Icon src="/icons/basic/setting.png" size={24} />
    </IconButton>
  );
}

function IsRunningCell(params: GridRenderCellParams<GridValidRowModel, boolean>) {
  const { row } = params;

  const { stopBot, restartBot } = useBotCommand();
  const { botDetailQuery } = useBotDetailQuery(row.id);
  const isStopBotMutating = useIsMutating({ mutationKey: ["stopBot"] });
  const isRestartBotMutating = useIsMutating({ mutationKey: ["restartBot"] });

  return isStopBotMutating || isRestartBotMutating ? (
    <CircularProgress color="inherit" size={16} />
  ) : (
    <CustomSwitch
      checked={botDetailQuery.data?.isRunning}
      onClick={() => {
        botDetailQuery.data?.isRunning
          ? stopBot({ selected: row.id })
          : restartBot({ selected: row.id });
      }}
    />
  );
}

const OasisBotListColumns: GridColDef[] = [
  {
    field: "presetName",
    headerName: "프리셋 이름",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotType["presetName"]>) => (
      <div className="flex items-center">
        <div className="w-4/5 whitespace-normal">{params.value}</div>
        <IconButtonFun />
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
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotType["runningTime"]>) => (
      <div className="whitespace-normal">{TimeConvert(Number(params.value))}</div>
    ),
  },
  {
    field: "coinType",
    headerName: "종목",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotType["coinType"]>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "isRunning",
    headerName: "상태",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, BotType["isRunning"]>) => (
      <IsRunningCell {...params} />
    ),
  },
];

export default OasisBotListColumns;
