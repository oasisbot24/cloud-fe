import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { amber, purple } from "@mui/material/colors";

function TransactionHistory() {
  const columns: GridColDef[] = [
    { field: "time", headerName: "거래시각", width: 170 },
    {
      field: "item",
      headerName: "종목",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "position",
      headerName: "포지션",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => (
        <Chip
          label={params.value}
          sx={{
            userSelect: "none",
            fontWeight: 500,
            backgroundColor: params.value === "BUY" ? purple[100] : amber[200],
            color: "white",
            borderRadius: 2,
          }}
        />
      ),
    },
    {
      field: "price",
      headerName: "매수/매도가",
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => (
        <Typography variant="body2" component="span">
          {params.value.toLocaleString() + " KRW"}
        </Typography>
      ),
    },
    {
      field: "amount",
      headerName: "매수/매도수량",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalPrice",
      headerName: "총매수/매도금액",
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => (
        <Typography variant="body2" component="span">
          {params.value.toLocaleString() + " KRW"}
        </Typography>
      ),
    },
    {
      field: "profitRatio",
      headerName: "손익률",
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => (
        <Typography
          variant="body2"
          component="span"
          color={params.value.slice(0, 1) === "-" ? "blue" : "red"}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "realizedProfit",
      headerName: "실현손익",
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (params: GridCellParams) => (
        <Typography variant="body2" component="span">
          {params.value.toLocaleString() + " KRW"}
        </Typography>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      time: "22-06-23 22:09:11",
      item: "비트코인",
      position: "BUY",
      price: 30122334,
      amount: 0.1,
      totalPrice: 3012233,
      profitRatio: "+0.1%",
      realizedProfit: 2122,
    },
    {
      id: 2,
      time: "22-06-23 22:09:11",
      item: "비트코인",
      position: "SELL",
      price: 30122334,
      amount: 0.1,
      totalPrice: 3012233,
      profitRatio: "-0.1%",
      realizedProfit: 2122,
    },
  ];
  return (
    <Box className="mt-3 bg-white rounded-md">
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

export default TransactionHistory;
