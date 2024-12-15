import { useState } from "react";

import { Box, Stack } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CircleChart from "@/cards/dashboard/ChartAssetCard/CircleChart";
import SelectButtonList from "@/cards/dashboard/ChartAssetCard/SelectButtonList";
import { useChart } from "@/hooks/query/useChart";

export default function ChartAssetCard() {
  const {
    coinRatioQuery: { data: coinRatioData },
  } = useChart();
  const [focus, setFocus] = useState<string>(coinRatioData?.[0]?.name ?? "");

  return (
    <Card>
      <CardHeader id="pie-chart" title="실시간 자산 비율" />
      <Stack direction="row" className="mt-[-40px] justify-center">
        <CircleChart coinRatioList={coinRatioData} focus={focus} />
      </Stack>
      <Box className="absolute bottom-0 w-full p-4">
        <SelectButtonList coinRatioList={coinRatioData} focus={focus} setFocus={setFocus} />
      </Box>
    </Card>
  );
}
