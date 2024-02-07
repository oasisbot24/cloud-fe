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

function BotUseInfo() {
  return (
    <TableContainer component={Paper} elevation={0} className="w-full">
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
  );
}

export default BotUseInfo;
