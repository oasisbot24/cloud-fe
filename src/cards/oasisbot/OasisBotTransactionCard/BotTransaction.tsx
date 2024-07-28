import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useOasisBotTransactionColumns from "@/components/table/useOasisBotTransactionColumns";

export default function BotTransaction() {
  const { columns, OasisBotTransactionCompactRows, isLoading } =
    useOasisBotTransactionColumns();
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "410px", overflow: "auto" }}>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={OasisBotTransactionCompactRows ?? []}
        hideFooter
        sx={{ border: "none" }}
      />
    </CardContent>
  );
}
