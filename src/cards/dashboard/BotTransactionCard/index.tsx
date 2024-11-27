import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import DetailChip from "@/components/chip/DetailChip";
import OasisBotTransactionCompactColumns from "@/components/table/OasisBotTransactionCompactColumns";
import { useBotInfo } from "@/hooks/query/useOasisBot";

function BotTransactionCard() {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactMockRows } = transactionQuery;
  return (
    <Card>
      <CardHeader id="history" title="오아시스 BOT 실시간 거래내역" />
      <CardContent
        sx={{
          paddingTop: "0",
          maxHeight: "310px",
          overflow: "auto",
        }}
      >
        <DataGrid
          loading={isLoading}
          columns={OasisBotTransactionCompactColumns}
          rows={OasisBotTransactionCompactMockRows ?? []}
          hideFooter
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </CardContent>
      <CardFooter>
        <DetailChip onClick={() => console.log("clicked")} />
      </CardFooter>
    </Card>
  );
}

export default BotTransactionCard;
