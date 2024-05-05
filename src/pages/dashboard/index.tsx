import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard/index";
import ChartCard from "@/cards/ChartCard";
import CircleChartCard from "@/cards/CircleChartCard/index";
import LiquidCard from "@/cards/LiquidCard";
import PresetsCard from "@/cards/PresetsCard";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack className="gap-4">
        <Stack direction="row" className="gap-4 h-[340px]">
          <BotListCard />
          <CircleChartCard />
          <BotListCard />
        </Stack>
        <Stack direction="row" className="gap-4 h-[436px]">
          <Box className="w-7/12">
            <ChartCard />
          </Box>
          <Box className="w-5/12">
            <PresetsCard />
          </Box>
        </Stack>
        <Stack direction="row" className="gap-4 h-[340px]">
          <Box className="w-5/12">
            <LiquidCard />
          </Box>
          <Box className="w-7/12">
            <BotListCard />
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}
