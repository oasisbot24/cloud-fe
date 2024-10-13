import { Box, Stack, TableCell, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { subscribeMonthAtom, subscribeTypeAtom } from "@/datas/subscribe";
import { useProductQuery } from "@/hooks/query/useSubcribe";
import useModalGlobal from "@/hooks/useModalGlobal";
import { numberToCurrency } from "@/libs/string";
import SubscribeModal from "./SubscribeModal";
import { subscribeData, tableData } from "./SubscribeTableData";
import { TableRowType } from "./SubscribeTableRow";

interface CustomTableCellProps {
  subscribeType: SubscribeType;
  tableRowType?: TableRowType;
  children?: React.ReactNode;
}

function CustomTableCell({
  subscribeType,
  tableRowType,
  children,
}: CustomTableCellProps) {
  const [, setType] = useAtom(subscribeTypeAtom);
  const { openModal } = useModalGlobal();
  return (
    <TableCell
      width={220}
      className="cursor-pointer items-center text-center"
      onMouseEnter={() => setType(subscribeType)}
      onMouseLeave={() => setType(null)}
      onClick={() => openModal(<SubscribeModal type={subscribeType} />)}
    >
      {tableRowType ? (
        <Stack className="gap-1">
          <Typography
            variant={subscribeType === "free" ? "200B" : "200R"}
            className={subscribeType === "free" ? "font-bold text-brand" : ""}
          >
            {tableData[subscribeType][tableRowType]}
          </Typography>
        </Stack>
      ) : (
        children
      )}
    </TableCell>
  );
}

function CustomChip({ type }: { type: SubscribeType }) {
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  const [month] = useAtom(subscribeMonthAtom);
  const [currentType] = useAtom(subscribeTypeAtom);
  return (
    <Box
      className={`rounded-full py-2 px-5 w-fit mx-auto ${type === currentType ? "bg-brand text-white" : "bg-neutral-200 text-brand"}`}
    >
      <Typography variant="200B">
        {numberToCurrency(
          productData?.find(
            product =>
              product.productId === subscribeData[type].month[month]?.productId,
          )?.productPrice ?? 0,
          "￦",
        )}
      </Typography>
    </Box>
  );
}

function CustomOriginPrice({ type }: { type: SubscribeType }) {
  const {
    productQuery: { data: productData },
  } = useProductQuery();
  return (
    <Typography variant="200R" className="text-sub-4 line-through">
      {numberToCurrency(
        (productData?.find(
          product =>
            product.productId === subscribeData[type].month[1]?.productId,
        )?.productPrice ?? 0) * 3,
        "￦",
      )}
    </Typography>
  );
}

export { CustomChip, CustomOriginPrice, CustomTableCell };
