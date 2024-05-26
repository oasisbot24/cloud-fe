import { Box, Stack } from "@mui/material";
import AdvertisementCard from "@/cards/AdvertisementCard/index";
import AssetStatusCard from "@/cards/AssetStatusCard/index";
import BotListCard from "@/cards/BotListCard/index";
import BotTransactionCard from "@/cards/BotTransactionCard";
import ChartCard from "@/cards/ChartCard";
import CircleChartCard from "@/cards/CircleChartCard/index";
import PresetsCard from "@/cards/PresetsCard";
import ProfitRankCard from "@/cards/ProfitRankCard";
import RunOasisBotCard from "@/cards/RunOasisBotCard";
import TestResultCard from "@/cards/TestResultCard";
import Layout from "@/components/Layout";

export default function OasisLab() {
  return (
    <Layout>
      <Stack className="gap-4">
        <Stack direction="row" className="gap-4 h-[495px]">
          <Box className="w-3/12">
            <RunOasisBotCard />
          </Box>
          <Box className="w-9/12">
            <Stack className="gap-4 h-[495px]">
              <Box>
                <BotListCard />
              </Box>
              <Box>
                <Stack direction="row" className="gap-4 h-[385px]">
                  <Box className="w-6/12">
                    <TestResultCard />
                  </Box>
                  <Box className="w-6/12">
                    <BotListCard />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" className="gap-4 h-[400px]">
          <BotListCard />
        </Stack>
      </Stack>
    </Layout>
  );
}
