import { CardActions, CardContent, Chip, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import useOrderSelect from "@/hooks/common/useOrderSelect";
import useTransactionStatusSelect from "@/hooks/common/useTransactionStatusSelect";
import useBotTransaction from "@/hooks/dashboard/useBotTransaction";
import BotTransaction from "./BotTransaction";
import Warning from "./Warning";

function OasisBotTransactionCard() {
  return (
    <Card>
      <CardHeader id="history" title="오아시스 Bot 실시간 거래내역" />

      {/* <Warning /> */}
      <BotTransaction />
    </Card>
  );
}

export default OasisBotTransactionCard;
