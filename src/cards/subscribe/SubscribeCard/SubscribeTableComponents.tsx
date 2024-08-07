import { Box, Stack, TableCell, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { subscribeMonthAtom, subscribeTypeAtom } from "@/datas/subscribe";
import useModalGlobal from "@/hooks/useModalGlobal";
import SubscribeModal from "./SubscribeModal";
import { paymentData } from "./SubscribeTableData";

interface CustomTableCellProps {
  children: React.ReactNode;
  type: SubscribeType;
}

function CustomTableCell({ children, type }: CustomTableCellProps) {
  const [, setType] = useAtom(subscribeTypeAtom);
  const { openModal } = useModalGlobal();
  return (
    <TableCell
      width={220}
      className="cursor-pointer items-center text-center"
      onMouseEnter={() => setType(type)}
      onMouseLeave={() => setType(null)}
      onClick={() => openModal(<SubscribeModal type={type} />)}
    >
      <Stack className="gap-1">{children}</Stack>
    </TableCell>
  );
}

function CustomChip({ type }: { type: SubscribeType }) {
  const [month] = useAtom(subscribeMonthAtom);
  const [currentType] = useAtom(subscribeTypeAtom);
  return (
    <Box
      className={`rounded-full py-2 px-5 w-fit mx-auto ${type === currentType ? "bg-brand text-white" : "bg-neutral-200 text-brand"}`}
    >
      <Typography variant="200B">{paymentData[month][type]}</Typography>
    </Box>
  );
}
export { CustomChip, CustomTableCell };
