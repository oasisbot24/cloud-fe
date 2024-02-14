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

interface TableData {
  row: string[];
  data: string[];
}

export default function CustomTable({ row, data }: TableData) {
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
              {data?.map((item, index) =>
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
