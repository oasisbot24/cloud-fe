import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import SelectButtonList from "@/cards/dashboard/ChartAssetCard/SelectButtonList";
import useCurrencySelect from "@/hooks/card/useCurrencySelect";
import useMarketSelect from "@/hooks/card/useMarketSelect";
import usePriceStatusSelect from "@/hooks/card/usePriceStatusSelect";
import { useChart } from "@/hooks/query/useChart";
import CircleChart from "./CircleChart";

export default function ChartAssetCard() {
  const { PriceStatusSelect } = usePriceStatusSelect();
  const { CurrencySelect } = useCurrencySelect();
  const { market, MarketSelect } = useMarketSelect();
  const {
    coinRatioQuery: { data: coinRatioData },
  } = useChart(market);
  const [focus, setFocus] = useState<string>(coinRatioData?.[0]?.name ?? "");

  return (
    <Card>
      <CardHeader
        id="pie-chart"
        title="실시간 자산 비율"
        action={
          <>
            <PriceStatusSelect />
            <CurrencySelect />
            <MarketSelect />
          </>
        }
      />
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
