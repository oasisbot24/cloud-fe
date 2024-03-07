import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Menu } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAtom } from "jotai";
import CustomMenuItem from "@/components/basic/CustomMenuItem";
import presetsAtom from "@/datas/preset";

function PresetTable() {
  const [presets, setPresets] = useAtom(presetsAtom);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickSettingBtn = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "프리셋",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "settingIndicator",
      headerName: "설정 보조지표",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "profitRate",
      headerName: "익절율",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lossRate",
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
      renderCell: params => (
        <>
          <IconButton
            id="settingBtn"
            aria-controls={open ? "settingMenu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickSettingBtn}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="settingMenu"
            aria-labelledby="settingBtn"
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
            <CustomMenuItem>프리셋 설정 변경</CustomMenuItem>
            <CustomMenuItem>프리셋 삭제</CustomMenuItem>
          </Menu>
        </>
      ),
    },
  ];

  return (
    <Box className="bg-white rounded-md">
      <DataGrid
        className="font-roboto"
        columns={columns}
        rows={presets}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}

export default PresetTable;
