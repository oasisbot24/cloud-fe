import { CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import OasisBotTransactionCompactColumns from "@/components/table/OasisBotTransactionCompactColumns";
import { useBotInfo } from "@/hooks/query/useOasisBot";

function BotTransactionCard() {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactMockRows } =
    transactionQuery;
  return (
    <Card>
      <CardHeader id="history" title="오아시스 BOT 실시간 거래내역" />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={OasisBotTransactionCompactColumns}
          rows={OasisBotTransactionCompactMockRows ?? []}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
      <CardFooter>
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardFooter>
    </Card>
  );
}

export default BotTransactionCard;
