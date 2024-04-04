import React, { useEffect, useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { amber, purple } from "@mui/material/colors";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridTreeNode,
  GridValidRowModel,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { BotType } from "@/apis/getBot";

interface Props {
  data: BotType | undefined;
}
function TransactionHistory({ data }: Props) {
  const [rows, setRows] = useState<any[]>([]);

  const columns: GridColDef[] = [
    { field: "date", headerName: "거래시각", flex: 1 },
    // {
    //   field: "coin",
    //   headerName: "종목",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "position",
      headerName: "포지션",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (
        params: GridCellParams<GridValidRowModel, string, string, GridTreeNode>,
      ) => (
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
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params: GridValueFormatterParams<number>) =>
        params.value ? `${params.value.toLocaleString()} KRW` : "-",
      renderCell: (
        params: GridCellParams<GridValidRowModel, number, string, GridTreeNode>,
      ) => (
        <Typography variant="body2" component="span">
          {params.formattedValue}
        </Typography>
      ),
    },
    {
      field: "volume",
      headerName: "매수/매도수량",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "total_price",
      headerName: "총매수/매도금액",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params: GridValueFormatterParams<number>) =>
        params.value ? `${params.value.toLocaleString()} KRW` : "-",
      renderCell: (
        params: GridCellParams<GridValidRowModel, number, string, GridTreeNode>,
      ) => (
        <Typography variant="body2" component="span">
          {params.formattedValue}
        </Typography>
      ),
    },
    {
      field: "profit_loss_rate",
      headerName: "손익률",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params: GridValueFormatterParams<string>) => {
        if (!params.value) return "-";
        return params.value;
      },
      renderCell: (
        params: GridCellParams<GridValidRowModel, string, string, GridTreeNode>,
      ) => {
        return (
          <Typography
            variant="body2"
            component="span"
            color={params.formattedValue?.slice(0, 1) === "-" ? "blue" : "red"}
          >
            {params.formattedValue}
          </Typography>
        );
      },
    },
    {
      field: "profit_loss",
      headerName: "실현손익",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params: GridValueFormatterParams<number>) =>
        params.value ? `${params.value.toLocaleString()} KRW` : "-",
      renderCell: (
        params: GridCellParams<GridValidRowModel, number, string, GridTreeNode>,
      ) => (
        <Typography variant="body2" component="span">
          {params.formattedValue}
        </Typography>
      ),
    },
  ];

  useEffect(() => {
    const list: React.SetStateAction<any[]> = [];
    if (data) {
      data.history.map((item: any, index: number) => {
        const result = {
          id: index,
          date: item.date,
          position: item.position,
          price: item.price,
          profit_loss: item.profit_loss,
          profit_loss_rate: item.profit_loss_rate,
          total_price: item.total_price,
          volume: item.volume,
        };
        list.push(result);
      });
    }

    setRows(list);
  }, [data]);
  // const rows = [
  //   {
  //     id: 1,
  //     time: "22-06-23 22:09:11",
  //     item: "비트코인",
  //     position: "BUY",
  //     price: 30122334,
  //     amount: 0.1,
  //     totalPrice: 3012233,
  //     profitRatio: "+0.1%",
  //     realizedProfit: 2122,
  //   },
  //   {
  //     id: 2,
  //     time: "22-06-23 22:09:11",
  //     item: "스테이터스네트워크토큰",
  //     position: "SELL",
  //     price: 30122334,
  //     amount: 0.1,
  //     totalPrice: 3012233,
  //     profitRatio: "-0.1%",
  //     realizedProfit: 2122,
  //   },
  // ];
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

export default TransactionHistory;
