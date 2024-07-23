import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import ProfitRankColumns, {
  ProfitRankMockRows,
} from "@/components/table/ProfitRankColumns";

function ProfitRankCard() {
  return (
    <Card>
      <CardHeader id="ranking" title="실시간 수익 Top5" />
      <CardContent sx={{ paddingTop: "0", overflow: "auto" }}>
        <DataGrid
          columns={ProfitRankColumns}
          rows={ProfitRankMockRows}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
    </Card>
  );
}

export default ProfitRankCard;
