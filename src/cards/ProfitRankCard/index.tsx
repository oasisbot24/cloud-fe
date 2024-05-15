import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import useProfitRank from "@/hooks/dashboard/useProfitRank";

function ProfitRankCard() {
  const { columns, rows } = useProfitRank();
  const { CurrencySelect } = useCurrencySelect();
  const { PriceStatusSelect } = usePriceStatusSelect();
  const { MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        id="ranking"
        title="실시간 수익 Top5"
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
