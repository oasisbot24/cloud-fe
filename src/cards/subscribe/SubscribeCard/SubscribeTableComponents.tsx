import { Box, Stack, TableCell, Typography } from "@mui/material";
import { useAtom } from "jotai";

import { subscribeData, tableData } from "@/cards/subscribe/SubscribeCard/SubscribeTableData";
import { TableRowType } from "@/cards/subscribe/SubscribeCard/SubscribeTableRow";
import MySubscribeDialog from "@/components/dialog/MySubscribeDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { productKeyAtom, productMonthAtom } from "@/datas/subscribe";
import { useProductQuery } from "@/hooks/query/useSubcribe";
import { numberToCurrency } from "@/libs/string";

interface CustomTableCellProps {
  productKey: Subscribe.ProductKey;
  tableRowType?: TableRowType;
  children?: React.ReactNode;
}

function CustomTableCell({ productKey, tableRowType, children }: CustomTableCellProps) {
  const [, setKey] = useAtom(productKeyAtom);
  const { openDialog } = useDialogGlobal();
  return (
    <TableCell
      width={220}
      className="cursor-pointer items-center text-center"
      onMouseEnter={() => setKey(productKey)}
      onMouseLeave={() => setKey(null)}
      onClick={() => openDialog(<MySubscribeDialog />)}
    >
      {tableRowType ? (
        <Stack className="gap-1">
          <Typography
            variant={productKey === "free" ? "200B" : "200R"}
            className={productKey === "free" ? "font-bold text-brand" : ""}
          >
            {tableData[productKey][tableRowType]}
          </Typography>
        </Stack>
      ) : (
        children
      )}
    </TableCell>
  );
}

function CustomChip({ productKey }: { productKey: Subscribe.ProductKey }) {
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  const [month] = useAtom(productMonthAtom);
  const [currentKey] = useAtom(productKeyAtom);
  return (
    <Box
      className={`mx-auto w-fit rounded-full px-5 py-2 ${productKey === currentKey ? "bg-brand text-white" : "bg-neutral-200 text-brand"}`}
    >
      <Typography variant="200B">
        {numberToCurrency(
          productData?.find(
            product => product.productId === subscribeData[productKey].month[month]?.productId,
          )?.productPrice ?? 0,
          "￦",
        )}
      </Typography>
    </Box>
  );
}

function CustomOriginPrice({ productKey }: { productKey: Subscribe.ProductKey }) {
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  return (
    <Typography variant="200R" className="text-sub-4 line-through">
      {numberToCurrency(
        (productData?.find(
          product => product.productId === subscribeData[productKey].month[1]?.productId,
        )?.productPrice ?? 0) * 3,
        "￦",
      )}
    </Typography>
  );
}

export { CustomChip, CustomOriginPrice, CustomTableCell };
