import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard/index";
import RunOasisBotCard from "@/cards/oasisbot/OasisBotRunCard";
import OasisLabInfoCard from "@/cards/oasislab/OasisLabInfoCard";
import OasisLabResultChartCard from "@/cards/oasislab/OasisLabResultChartCard";
import OasisLabResultInfoCard from "@/cards/oasislab/OasisLabResultInfoCard";
import Layout from "@/components/Layout";
import Carousel from "@/components/Layout/Carousel";

export default function OasisLab() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack className="gap-4">
          <Stack direction="row" className="gap-4 h-[495px]">
            <Box className="w-3/12">
              <RunOasisBotCard />
            </Box>
            <Stack className="w-9/12 gap-4 h-[495px]">
              <Stack direction="row" className="w-full h-full gap-4">
                <OasisLabInfoCard type="set" />
                <OasisLabInfoCard type="current" />
                <OasisLabInfoCard type="max" />
              </Stack>
              <Stack direction="row" className="gap-4 h-[385px] shrink-0">
                <Box className="w-7/12">
                  <OasisLabResultChartCard />
                </Box>
                <Box className="w-5/12">
                  <OasisLabResultInfoCard />
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" className="gap-4 h-[400px]">
            <BotListCard />
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}
