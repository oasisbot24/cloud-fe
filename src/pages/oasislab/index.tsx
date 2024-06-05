import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard/index";
import TestInfoCard from "@/cards/TestInfoCard/index";
import TestResultCard from "@/cards/TestResultCard";
import Layout from "@/components/Layout";
import Carousel from "@/components/Layout/Carousel";

export default function OasisLab() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack className="gap-4">
          <Stack direction="row" className="gap-4 h-[495px]">
            <Box className="w-3/12">
              <BotListCard />
            </Box>
            <Stack className="w-9/12 gap-4 h-[495px]">
              <Stack direction="row" className="w-full h-full gap-4">
                <TestInfoCard type="set" />
                <TestInfoCard type="current" />
                <TestInfoCard type="max" />
              </Stack>
              <Stack direction="row" className="gap-4 h-[385px] shrink-0">
                <Box className="w-6/12">
                  <TestResultCard />
                </Box>
                <Box className="w-6/12">
                  <BotListCard />
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
