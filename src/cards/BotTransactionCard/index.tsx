import { CardActions, CardContent, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import useOrderSelect from "@/hooks/common/useOrderSelect";
import useTransactionStatusSelect from "@/hooks/common/useTransactionStatusSelect";
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
      <CardActions className="flex justify-center mt-3">
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardActions>
    </Card>
  );
}

export default BotTransactionCard;
