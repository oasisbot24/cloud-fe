import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import SelectButtonList from "@/cards/CircleChartCard/SelectButtonList";
import CircleChart from "./CircleChart";

export default function CircleChartCard() {
  return (
    <Card>
      <Box className="p-4">실시간 자산비율</Box>
      <Stack direction="row" className="justify-center mt-[-20px]">
        <CircleChart />
      </Stack>
      <Box className="p-4 absolute w-full bottom-0">
        <SelectButtonList />
      </Box>
    </Card>
  );
}
