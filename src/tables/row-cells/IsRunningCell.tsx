import { CircularProgress } from "@mui/material";
import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";
import { useIsMutating } from "@tanstack/react-query";

import CustomSwitch from "@/components/common/CustomSwitch";
import useBotCommand from "@/hooks/card/useBotCommand";
import { useBotDetailQuery } from "@/hooks/query/useOasisBot";

function IsRunningStatusCell(params: GridRenderCellParams<GridValidRowModel, boolean>) {
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

export default IsRunningStatusCell;
