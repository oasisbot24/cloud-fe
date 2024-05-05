import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import SelectButtonList from "@/cards/CircleChartCard/SelectButtonList";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";
import CircleChart from "./CircleChart";

export default function CircleChartCard() {
  const { PriceStatusSelect } = usePriceStatusSelect();
  const { CurrencySelect } = useCurrencySelect();
  const { MarketSelect } = useMarketSelect();

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
        <CircleChart />
      </Stack>
      <Box className="p-4 absolute w-full bottom-0">
        <SelectButtonList />
      </Box>
    </Card>
  );
}
