import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function TransactionHistory() {
  const columns: GridColDef[] = [
    { field: "time", headerName: "거래시각", width: 220 },
    { field: "item", headerName: "종목", width: 220 },
    { field: "position", headerName: "포지션", width: 220 },
    { field: "price", headerName: "매수/매도가", width: 220 },
    { field: "amount", headerName: "매수/매도수량", width: 220 },
    { field: "totalPrice", headerName: "총매수/매도금액", width: 220 },
    { field: "profitRatio", headerName: "손익률", width: 220 },
    { field: "realizedProfit", headerName: "실현손익", width: 220 },
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
      profitRatio: "+0.1%",
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
