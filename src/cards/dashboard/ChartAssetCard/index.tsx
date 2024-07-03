import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import SelectButtonList from "@/cards/dashboard/ChartAssetCard/SelectButtonList";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import useCoinRatio from "@/hooks/query/useCoinRatio";
import CircleChart from "./CircleChart";

export default function ChartAssetCard() {
  const { PriceStatusSelect } = usePriceStatusSelect();
  const { CurrencySelect } = useCurrencySelect();
  const { market, MarketSelect } = useMarketSelect();
  const {
    coinRatioQuery: { data: coinRatioData },
  } = useCoinRatio(market);
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
