import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import SelectButtonList from "@/cards/dashboard/ChartAssetCard/SelectButtonList";
import { useChart } from "@/hooks/query/useChart";
import CircleChart from "./CircleChart";

export default function ChartAssetCard() {
  const {
    coinRatioQuery: { data: coinRatioData },
  } = useChart();
  const [focus, setFocus] = useState<string>(coinRatioData?.[0]?.name ?? "");

  return (
    <Card>
      <CardHeader id="pie-chart" title="실시간 자산 비율" />
      <Stack direction="row" className="justify-center mt-[-40px]">
        <CircleChart coinRatioList={coinRatioData} focus={focus} />
      </Stack>
      <Box className="p-4 absolute w-full bottom-0">
        <SelectButtonList
          coinRatioList={coinRatioData}
          focus={focus}
          setFocus={setFocus}
        />
      </Box>
    </Card>
  );
}
