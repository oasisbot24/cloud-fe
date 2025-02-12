import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useBotInfo } from "@/hooks/query/useOasisBot";
import OasisBotTransactionColumns from "@/tables/OasisBotTransactionColumns";

export default function BotTransaction() {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactRows } = transactionQuery;
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "450px", overflow: "auto" }}>
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
