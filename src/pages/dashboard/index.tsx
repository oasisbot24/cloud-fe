import { Box, Stack } from "@mui/material";
import AdvertisementCard from "@/cards/AdvertisementCard/index";
import AssetStatusCard from "@/cards/AssetStatusCard/index";
import BotTransactionCard from "@/cards/BotTransactionCard";
import ChartCard from "@/cards/ChartCard";
import CircleChartCard from "@/cards/CircleChartCard/index";
import OasisBotListCard from "@/cards/OasisBotListCard";
import ProfitRankCard from "@/cards/ProfitRankCard";
import Layout from "@/components/Layout";
import Carousel from "@/components/Layout/Carousel/index";

export default function Home() {
  return (
    <Layout>
      <Carousel minWidth={1400}>
        <Stack className="gap-4">
          <Stack direction="row" className="gap-4 h-[340px]">
            <AssetStatusCard />
            <CircleChartCard />
            <AdvertisementCard />
          </Stack>
          <Stack direction="row" className="gap-4 h-[436px]">
            <Box className="w-7/12">
              <ChartCard />
            </Box>
            <Box className="w-5/12">
              <OasisBotListCard />
            </Box>
          </Stack>
          <Stack direction="row" className="gap-4 h-[436px]">
            <Box className="w-5/12">
              <BotTransactionCard />
            </Box>
            <Box className="w-7/12">
              <ProfitRankCard />
            </Box>
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}
