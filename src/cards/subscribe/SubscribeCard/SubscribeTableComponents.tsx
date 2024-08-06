import { useRouter } from "next/router";
import { Box, Stack, TableCell, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { subscribeMonthAtom, subscribeTypeAtom } from "@/datas/subscribe";

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
      <Stack className="gap-1">{children}</Stack>
    </TableCell>
  );
}

function CustomChip({ type }: { type: "free" | "promotion" | "allinone" }) {
  const [month] = useAtom(subscribeMonthAtom);
  const [currentType] = useAtom(subscribeTypeAtom);
  let text = "";
  if (month === 1) {
    switch (type) {
      case "free":
        text = "₩0";
        break;
      case "promotion":
        text = "₩19,000";
        break;
      case "allinone":
        text = "₩49,000";
        break;
      default:
        break;
    }
  } else {
    switch (type) {
      case "free":
        text = "₩0";
        break;
      case "promotion":
        text = "₩49,000";
        break;
      case "allinone":
        text = "₩147,000";
        break;
      default:
        break;
    }
  }
  return (
    <Box
      className={`rounded-full py-2 px-5 w-fit mx-auto ${type === currentType ? "bg-brand text-white" : "bg-neutral-200 text-brand"}`}
    >
      <Typography variant="200B">{text}</Typography>
    </Box>
  );
}
export { CustomTableCell, CustomChip };
