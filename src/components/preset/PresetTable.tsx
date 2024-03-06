import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function PresetTable() {
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
    },
  ];

  const rows = [
    {
      id: 1,
      name: "하락장 세팅",
      settingIndicator: "TD-SEQUENTIAL",
      profitRate: 0.2,
      lossRate: -3,
      세팅: "",
    },
    {
      id: 2,
      name: "상승장 세팅",
      settingIndicator: "TD-SEQUENTIAL",
      profitRate: 0.6,
      lossRate: -2,
      세팅: "",
    },
  ];

  return (
    <Box className="bg-white rounded-md">
      <DataGrid
        className="font-roboto"
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}

export default PresetTable;
