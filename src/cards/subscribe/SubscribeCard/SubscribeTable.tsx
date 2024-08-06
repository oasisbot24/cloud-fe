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
import { CustomChip, CustomTableCell } from "./SubscribeTableComponents";
import tableData from "./SubscribeTableData";
import TableRowMeta, { tableRowData } from "./SubscribeTableRow";

export default function SubscribeTable() {
  const [month] = useAtom(subscribeMonthAtom);
  const [type] = useAtom(subscribeTypeAtom);

  return (
    <TableContainer className="p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <CustomTableCell type="free">
              <Typography variant="h6">Free</Typography>
              <CustomChip type="free" />
            </CustomTableCell>
            <CustomTableCell type="promotion">
              <Typography variant="h6">코인원 프로모션</Typography>
              {month === 3 && (
                <Typography variant="200R" className="text-sub-4 line-through">
                  ￦57,000
                </Typography>
              )}
              <CustomChip type="promotion" />
            </CustomTableCell>
            <CustomTableCell type="allinone">
              <Typography variant="h6">All in One</Typography>
              {month === 3 && (
                <Typography variant="200R" className="text-sub-4 line-through">
                  ￦129,000
                </Typography>
              )}
              <CustomChip type="allinone" />
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData.map(key => (
            <TableRow key={key} className="h-[64px]">
              <TableRowMeta type={key} />
              <CustomTableCell type="free">
                <Typography
                  variant={type === "free" ? "200B" : "200R"}
                  className={type === "free" ? "font-bold text-brand" : ""}
                >
                  {tableData.free[key]}
                </Typography>
              </CustomTableCell>
              <CustomTableCell type="promotion">
                <Typography
                  variant={type === "promotion" ? "200B" : "200R"}
                  className={type === "promotion" ? "font-bold text-brand" : ""}
                >
                  {tableData.promotion[key]}
                </Typography>
              </CustomTableCell>
              <CustomTableCell type="allinone">
                <Typography
                  variant={type === "allinone" ? "200B" : "200R"}
                  className={type === "allinone" ? "font-bold text-brand" : ""}
                >
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
