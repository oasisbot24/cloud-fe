import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import ProfitRankColumns from "@/components/table/ProfitRankColumns";
import { useInfoRanking } from "@/hooks/query/useInfo";

function ProfitRankCard() {
  const { rankingQuery } = useInfoRanking(365);
  const { isLoading, data: ProfitRankMockRows } = rankingQuery;
  return (
    <Card>
      <CardHeader id="ranking" title="실시간 수익 Top5" />
      <CardContent sx={{ paddingTop: "0", overflow: "auto" }}>
        <DataGrid
          loading={isLoading}
          columns={ProfitRankColumns}
          rows={ProfitRankMockRows ?? []}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
    </Card>
  );
}

export default ProfitRankCard;
