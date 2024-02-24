import React, { useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const row = ["접속 거래소", "잔고", "닉네임", "사용시간"];

// const oasisUrl = "http://3.36.71.228:8080/api/v1";
const oasisUrl = "http://localhost:9999";

export default function CustomTable() {
  const [data, setData] = useState([] as any);

  const dashboard = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      axios.get(oasisUrl + "/user_dashboard").then(res => {
        return res;
      }),
  });

  useEffect(() => {
    const user = dashboard.data?.data.data;
    const userList = [];
    userList.push(user.exchange);
    userList.push(user.balance);
    userList.push(user.nickName);
    userList.push(user.usageTime);
    setData(userList);
  }, []);

  return (
    <div className="h-fit">
      <TableContainer
        component={Paper}
        elevation={0}
        className="w-full"
        sx={{ borderRadius: "10px" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              {row?.map((item, index) =>
                index == 0 ? (
                  <StyledCell key={index} align="left">
                    {item}
                  </StyledCell>
                ) : index == 3 ? (
                  <StyledCell key={index} align="right">
                    {item}
                  </StyledCell>
                ) : (
                  <StyledCell key={index} align="center">
                    {item}
                  </StyledCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {data?.map((item: any, index: any) =>
                index == 0 ? (
                  <StyledCell key={index} align="left">
                    {item}
                  </StyledCell>
                ) : index == 3 ? (
                  <StyledCell key={index} align="right">
                    {item}
                  </StyledCell>
                ) : (
                  <StyledCell key={index} align="center">
                    {item}
                  </StyledCell>
                ),
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
