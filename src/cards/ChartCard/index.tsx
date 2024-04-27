import { Box } from "@mui/material";
import Card from "@/cards/Card";
import CustomChart from "./CustomChart";
import Panel from "./Panel";

export default function ChartCard() {
  return (
    <Card>
      <Box p={2}>
        <Panel />
      </Box>
      <Box>
        <CustomChart />
      </Box>
    </Card>
  );
}
