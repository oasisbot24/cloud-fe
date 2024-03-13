import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Menu } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import CustomMenuItem from "@/components/basic/CustomMenuItem";

function usePresetTable() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickSettingBtn = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const columns: GridColDef[] = [
    {
      field: "presetName",
      headerName: "프리셋",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "indicatorName",
      headerName: "설정 보조지표",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "profitCutRate",
      headerName: "익절율",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lossCutRate",
      headerName: "손절율",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "setting",
      headerName: "세팅",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: params => {
        const onClick = () => console.log(params);
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
              <CustomMenuItem onClick={onClick}>
                프리셋 설정 변경
              </CustomMenuItem>
              <CustomMenuItem>프리셋 삭제</CustomMenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  return { columns };
}

export default usePresetTable;
