import { useState } from "react";
import { Box } from "@mui/material";
import Card from "@/cards/Card";
import { useDashboarChart } from "@/hooks/query/useChart";
import CustomChart from "./CustomChart";
import Panel from "./Panel";

export default function ChartBotCard() {
  const { dashboardChartQuery } = useDashboarChart();
  const { data: chartItem } = dashboardChartQuery;
  const chart = chartItem || [];
  const [menuId, setMenuId] = useState(0);

  return (
    <Card>
      <Box p={2}>
        <Panel setMenuId={setMenuId} chartLen={chart.length} />
      </Box>
      <CustomChart
        date={chart.length > 0 ? chart[menuId]["chartData"]["date"] : []}
        price={chart.length > 0 ? chart[menuId]["chartData"]["price"] : []}
      />
    </Card>
  );
}
