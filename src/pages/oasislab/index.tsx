import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard/index";
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
      </Carousel>
    </Layout>
  );
}
