/* Dependencies */
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

/* Components */
import TopNavLayout from "@/components/TopNavLayout";
import BotSetting from "@/components/oasisbot/BotSetting";

const StyledCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#373B5C",
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Roboto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Roboto",
  },
}));

const columns: GridColDef[] = [
  { field: "time", headerName: "거래시각", width: 200 },
  { field: "item", headerName: "종목", width: 200 },
  { field: "position", headerName: "포지션", width: 200 },
  { field: "price", headerName: "매수/매도가", width: 200 },
  { field: "amount", headerName: "매수/매도수량", width: 200 },
  { field: "totalPrice", headerName: "총매수/매도금액", width: 200 },
  { field: "profitRatio", headerName: "손익률", width: 200 },
  { field: "realizedProfit", headerName: "실현손익", width: 200 },
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
    position: "BUY",
    price: 30122334,
    amount: 0.1,
    totalPrice: 3012233,
    profitRatio: "+0.1%",
    realizedProfit: 2122,
  },
];

function OasisBot() {
  return (
    <TopNavLayout>
      <TableContainer
        component={Paper}
        elevation={0}
        className="userInfo w-full"
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledCell align="left">접속 거래소</StyledCell>
              <StyledCell align="center">잔고</StyledCell>
              <StyledCell align="center">닉네임</StyledCell>
              <StyledCell align="right">사용시간</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell align="left">UPBIT 거래소</StyledCell>
              <StyledCell align="center">100,000 KRW</StyledCell>
              <StyledCell align="center">ALPHA</StyledCell>
              <StyledCell align="right">00:00:12</StyledCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="botAndProfit flex flex-col mt-10">
        <div className="label flex grow">
          <div className="botLabel grow basis-2/5 mr-5 py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            오아시스봇
          </div>
          <div className="profitLabel grow basis-3/5 py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            수익내역
          </div>
        </div>
        <div className="content flex grow mt-3">
          <BotSetting />
          <div className="profit grow basis-3/5 p-2.5 bg-white font-roboto font-semibold rounded-xl">
            수익내역
          </div>
        </div>
      </div>
      <div className="transactionHistory mt-10">
        <div className="label grow py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
          거래내역
        </div>
        <DataGrid
          className="mt-3"
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </TopNavLayout>
  );
}

export default OasisBot;
