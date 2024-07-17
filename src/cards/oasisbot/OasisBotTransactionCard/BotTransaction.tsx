import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useOasisBotTransaction from "@/hooks/oasisbot/useOasisBotTransaction";

export default function BotTransaction() {
  const { columns, botRows, isLoading } = useOasisBotTransaction();
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "410px", overflow: "auto" }}>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={botRows ?? []}
        hideFooter
        sx={{ border: "none" }}
      />
    </CardContent>
  );
}
