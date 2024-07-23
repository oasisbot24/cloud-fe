import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import OasisBotTransactionColumns, {
  OasisBotTransactionMockRows,
} from "@/components/table/OasisBotTransactionColumns";

export default function BotTransaction() {
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "410px", overflow: "auto" }}>
      <DataGrid
        columns={OasisBotTransactionColumns}
        rows={OasisBotTransactionMockRows}
        hideFooter
        sx={{ border: "none" }}
      />
    </CardContent>
  );
}
