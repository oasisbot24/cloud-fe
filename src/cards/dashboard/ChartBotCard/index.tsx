import { useState } from "react";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import Card from "@/cards/Card";
import exchangeAtom from "@/datas/exchange";
import { useDashboardChart } from "@/hooks/query/useChart";
import CustomChart from "./CustomChart";
import Panel from "./Panel";

export default function ChartBotCard() {
  const { dashboardChartQuery } = useDashboardChart();
  const { data: chartItem } = dashboardChartQuery;
  const chart = chartItem || [];
  const [menuId, setMenuId] = useState(0);

  return (
    <Card>
      <Box p={2}>
        <Panel setMenuId={setMenuId} menuId={menuId} chart={chart} />
      </Box>
      <CustomChart
        date={chart.length > 0 ? chart[menuId]["chartData"]["date"] : []}
        price={chart.length > 0 ? chart[menuId]["chartData"]["price"] : []}
        rate={chart.length > 0 ? chart[menuId]["chartData"]["rate"] : []}
      />
    </Card>
  );
}
