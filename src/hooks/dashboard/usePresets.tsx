import Image from "next/image";
import { IconButton } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { BotType, getBot } from "@/apis/oasisbot/bot";
import CustomSwitch from "@/components/common/CustomSwitch";
import useMarketSelect from "@/hooks/card/useMarketSelect";

function usePresets() {
  const { market } = useMarketSelect();

  const columns: GridColDef[] = [
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
      ) => <div className="whitespace-normal">{params.value}</div>,
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

  const { data: presetRows, isLoading: isPresetsLoading } = useQuery({
    queryKey: ["presets", market],
    queryFn: () => getBot(market),
  });

  return { columns, presetRows, isPresetsLoading };
}

export default usePresets;
