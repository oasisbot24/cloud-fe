import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { subscribeMonthAtom, subscribeTypeAtom } from "@/datas/subscribe";
import tableData from "./SubscribeTableData";
import TableRowMeta, { tableRowData } from "./SubscribeTableRow";

interface CustomTableCellProps {
  children: React.ReactNode;
  type: "free" | "promotion" | "allinone";
}

function CustomTableCell({ children, type }: CustomTableCellProps) {
  const { push } = useRouter();
  const [month] = useAtom(subscribeMonthAtom);
  const [, setType] = useAtom(subscribeTypeAtom);
  return (
    <TableCell
      width={220}
      className="cursor-pointer items-center text-center"
      onMouseEnter={() => setType(type)}
      onMouseLeave={() => setType(null)}
      onClick={() => push(`/subscribe/payment?month=${month}&type=${type}`)}
    >
      {children}
    </TableCell>
  );
}

export default function SubscribeTable() {
  const [type] = useAtom(subscribeTypeAtom);

  return (
    <TableContainer className="p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <CustomTableCell type="free">
              <Typography variant="h6">Free</Typography>
            </CustomTableCell>
            <CustomTableCell type="allinone">
              <Typography variant="h6">코인원 프로모션</Typography>
            </CustomTableCell>
            <CustomTableCell type="promotion">
              <Typography variant="h6">All in One</Typography>
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData.map(key => (
            <TableRow key={key} className="h-[64px]">
              <TableRowMeta type={key} />
              <CustomTableCell type="free">
                <Typography
                  variant="200R"
                  className={type === "free" ? "font-bold text-brand" : ""}
                >
                  {tableData.free[key]}
                </Typography>
              </CustomTableCell>
              <CustomTableCell type="allinone">
                <Typography variant="200R">
                  {tableData.promotion[key]}
                </Typography>
              </CustomTableCell>
              <CustomTableCell type="promotion">
                <Typography variant="200R">
                  {tableData.allinone[key]}
                </Typography>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
