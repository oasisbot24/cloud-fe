import { TableCell, Typography } from "@mui/material";

export type TableRowType =
  | "oasislab"
  | "getasset"
  | "oasisbot"
  | "exchange"
  | "api-connection"
  | "new-coin"
  | "partner";

export const tableRowData: TableRowType[] = [
  "oasislab",
  "getasset",
  "oasisbot",
  "exchange",
  "api-connection",
  "new-coin",
  "partner",
];

export default function TableRowMeta({ type }: { type: TableRowType }) {
  switch (type) {
    case "oasislab":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            연구실
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            백테스트
          </Typography>
        </TableCell>
      );
    case "getasset":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            실시간 자산 조회
          </Typography>
        </TableCell>
      );
    case "oasisbot":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            봇
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            자동거래
          </Typography>
        </TableCell>
      );
    case "exchange":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            거래소
          </Typography>
        </TableCell>
      );
    case "api-connection":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            원 클릭 API 연동
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            스마트엑세스
          </Typography>
        </TableCell>
      );
    case "new-coin":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            신규 종목 이용
          </Typography>
        </TableCell>
      );
    case "partner":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            제휴 거래소 가입
          </Typography>
        </TableCell>
      );
    default:
      return <TableCell />;
  }
}
