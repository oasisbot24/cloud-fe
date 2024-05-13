import React from "react";
import { CardActions, CardContent, CardHeader, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardIcon from "@/cards/CardIcon";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import useOrderSelect from "@/hooks/common/useOrderSelect";
import useTransactionStatusSelect from "@/hooks/common/useTransactionStatusSelect";
import useBotTransaction from "@/hooks/dashboard/useBotTransaction";

function BotTransactionCard() {
  const { columns, rows } = useBotTransaction();
  const { order, OrderSelect } = useOrderSelect();
  const { transactionStatus, TransactionStatusSelect } =
    useTransactionStatusSelect();
  const { market, MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        avatar={
          <CardIcon src="/icons/dashboard/history.png" alt="실시간 거래내역" />
        }
        title="실시간 BOT 거래내역"
        subheader="오늘 16:29 기준" // 추후 날짜/시간 라이브러리 사용해 수정할 것
        action={
          <>
            <OrderSelect />
            <TransactionStatusSelect />
            <MarketSelect />
          </>
        }
        titleTypographyProps={{
          fontSize: "16px",
          fontWeight: 700,
        }}
        subheaderTypographyProps={{
          color: "#B0B3B7",
          fontSize: "12px",
        }}
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
