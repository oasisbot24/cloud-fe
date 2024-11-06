import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";

import BotTransaction from "./BotTransaction";

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
