import React from "react";
import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CardIcon from "@/cards/CardIcon";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import useProfitRank from "@/hooks/dashboard/useProfitRank";

function ProfitRankCard() {
  const { columns, rows } = useProfitRank();
  const { currency, CurrencySelect } = useCurrencySelect();
  const { priceStatus, PriceStatusSelect } = usePriceStatusSelect();
  const { market, MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        avatar={
          <CardIcon src="/icons/dashboard/ranking.png" alt="실시간 수익 TOP" />
        }
        title="실시간 수익 Top5"
        subheader="오늘 16:29 기준"
        action={
          <>
            <CurrencySelect />
            <PriceStatusSelect />
            <MarketSelect />
          </>
        }
      />
      <CardContent sx={{ paddingTop: "0", overflow: "auto" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
    </Card>
  );
}

export default ProfitRankCard;
