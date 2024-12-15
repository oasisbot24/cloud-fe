import React from "react";

import { useRouter } from "next/router";

import { IconButton } from "@mui/material";
import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import Icon from "@/components/Icon";

function PresetNameCell(params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["presetName"]>) {
  return (
    <div className="flex items-center">
      <div className="w-4/5 whitespace-normal">{params.value}</div>
      <IconButtonFun />
    </div>
  );
}

function IconButtonFun() {
  const { push } = useRouter();
  return (
    <IconButton sx={{ width: "24px", height: "24px" }} onClick={() => push("/preset")}>
      <Icon src="/icons/basic/setting.png" size={24} />
    </IconButton>
  );
}

export default PresetNameCell;
