import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Menu } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useSetAtom } from "jotai";
import CustomMenuItem from "@/components/basic/CustomMenuItem";
import {
  indicatorNameAtom,
  lossCutRateAtom,
  positionAtom,
  presetNameAtom,
  profitCutRateAtom,
  selectedPresetIdAtom,
} from "@/datas/preset";

type Props = {
  params: GridRenderCellParams;
};

function PresetTableSettingIcon({ params }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickSettingBtn = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const setSelectedPresetId = useSetAtom(selectedPresetIdAtom);
  const setPresetName = useSetAtom(presetNameAtom);
  const setIndicatorName = useSetAtom(indicatorNameAtom);
  const setPosition = useSetAtom(positionAtom);
  const setProfitCutRate = useSetAtom(profitCutRateAtom);
  const setLossCutRate = useSetAtom(lossCutRateAtom);

  return (
    <>
      <IconButton
        id={`settingBtn-${params.id}`}
        aria-controls={open ? `settingMenu-${params.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickSettingBtn}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id={`settingMenu-${params.id}`}
        aria-labelledby={`settingBtn-${params.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiMenu-paper": {
            background: "#F3F3F3",
          },
        }}
      >
        <CustomMenuItem>매매 비중 변경</CustomMenuItem>
        <CustomMenuItem
          onClick={() => {
            setSelectedPresetId(params.row.id);
            setPresetName(params.row.presetName);
            setIndicatorName(params.row.indicatorName);
            setPosition(params.row.position);
            setProfitCutRate(params.row.profitCutRate);
            setLossCutRate(params.row.lossCutRate);
          }}
        >
          프리셋 설정 변경
        </CustomMenuItem>
        <CustomMenuItem>프리셋 삭제</CustomMenuItem>
      </Menu>
    </>
  );
}

export default PresetTableSettingIcon;
