import { Box, Stack } from "@mui/material";
import AdvertisementCard from "@/cards/AdvertisementCard/index";
import BotListCard from "@/cards/BotListCard/index";
import BotTransactionCard from "@/cards/BotTransactionCard";
import ChartCard from "@/cards/ChartCard";
import CircleChartCard from "@/cards/CircleChartCard/index";
import PresetsCard from "@/cards/PresetsCard";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack className="gap-4">
        <Stack direction="row" className="gap-4 h-[340px]">
          <BotListCard />
          <CircleChartCard />
          <AdvertisementCard />
        </Stack>
        <Stack direction="row" className="gap-4 h-[436px]">
          <Box className="w-7/12">
            <ChartCard />
          </Box>
          <Box className="w-5/12">
            <PresetsCard />
          </Box>
        </Stack>
        <Stack direction="row" className="gap-4 h-[436px]">
          <Box className="w-5/12">
            <BotTransactionCard />
          </Box>
          <Box className="w-7/12">
            <BotListCard />
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}
