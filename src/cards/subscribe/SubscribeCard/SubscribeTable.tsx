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

import {
  CustomChip,
  CustomOriginPrice,
  CustomTableCell,
} from "@/cards/subscribe/SubscribeCard/SubscribeTableComponents";
import { subscribeData } from "@/cards/subscribe/SubscribeCard/SubscribeTableData";
import TableRowMeta, { tableRowData } from "@/cards/subscribe/SubscribeCard/SubscribeTableRow";
import { productMonthAtom } from "@/datas/subscribe";

function SubscribeTableHead({ productKey }: { productKey: Subscribe.ProductKey }) {
  const [month] = useAtom(productMonthAtom);
  return (
    <CustomTableCell productKey={productKey}>
      <Typography variant="h6">{subscribeData[productKey].title}</Typography>
      {month === 3 && productKey !== "free" && <CustomOriginPrice productKey={productKey} />}
      <CustomChip productKey={productKey} />
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
            <SubscribeTableHead productKey="free" />
            {/* <SubscribeTableHead productKey="basic" /> */}
            <SubscribeTableHead productKey="premium" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData.map(key => (
            <TableRow key={key} className="h-[64px]">
              <TableRowMeta type={key} />
              <CustomTableCell productKey="free" tableRowType={key} />
              {/* <CustomTableCell productKey="basic" tableRowType={key} /> */}
              <CustomTableCell productKey="premium" tableRowType={key} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
