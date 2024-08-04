import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import OasisBotTransactionColumns from "@/components/table/OasisBotTransactionColumns";
import { useBotInfo } from "@/hooks/query/useOasisBot";

export default function BotTransaction() {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactRows } = transactionQuery;
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "410px", overflow: "auto" }}>
      <DataGrid
        loading={isLoading}
        columns={OasisBotTransactionColumns}
        rows={OasisBotTransactionCompactRows ?? []}
        hideFooter
        sx={{ border: "none" }}
      />
    </CardContent>
  );
}
