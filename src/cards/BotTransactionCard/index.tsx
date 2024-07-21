import { CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import useMarketSelect from "@/hooks/card/useMarketSelect";
import useOrderSelect from "@/hooks/card/useOrderSelect";
import useTransactionStatusSelect from "@/hooks/card/useTransactionStatusSelect";
import useBotTransaction from "@/hooks/dashboard/useBotTransaction";

function BotTransactionCard() {
  const { columns, rows } = useBotTransaction();
  const { OrderSelect } = useOrderSelect();
  const { TransactionStatusSelect } = useTransactionStatusSelect();
  const { MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        id="history"
        title="실시간 BOT 거래내역"
        action={
          <>
            <OrderSelect />
            <TransactionStatusSelect />
            <MarketSelect />
          </>
        }
      />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
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
