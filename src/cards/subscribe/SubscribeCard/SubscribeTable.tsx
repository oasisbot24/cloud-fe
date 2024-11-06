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

import { subscribeMonthAtom } from "@/datas/subscribe";

import { CustomChip, CustomOriginPrice, CustomTableCell } from "./SubscribeTableComponents";
import { subscribeData } from "./SubscribeTableData";
import TableRowMeta, { tableRowData } from "./SubscribeTableRow";

function SubscribeTableHead({ type }: { type: SubscribeType }) {
  const [month] = useAtom(subscribeMonthAtom);
  return (
    <CustomTableCell subscribeType={type}>
      <Typography variant="h6">{subscribeData[type].title}</Typography>
      {month === 3 && type !== "free" && <CustomOriginPrice type={type} />}
      <CustomChip type={type} />
    </CustomTableCell>
  );
}

export default function SubscribeTable() {
  return (
    <TableContainer className="p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <SubscribeTableHead type="free" />
            <SubscribeTableHead type="basic" />
            <SubscribeTableHead type="premium" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData.map(key => (
            <TableRow key={key} className="h-[64px]">
              <TableRowMeta type={key} />
              <CustomTableCell subscribeType="free" tableRowType={key} />
              <CustomTableCell subscribeType="basic" tableRowType={key} />
              <CustomTableCell subscribeType="premium" tableRowType={key} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
