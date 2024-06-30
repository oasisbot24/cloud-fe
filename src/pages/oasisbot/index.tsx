import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard";
import OasisBotTransactionCard from "@/cards/OasisBotTransactionCard";
import OasisBotListCard from "@/cards/OasisBotListCard/index";
import OasisBotRunCard from "@/cards/OasisBotRunCard";
import RealtimeTransactionCard from "@/cards/RealtimeTransactionCard";
import Carousel from "@/components/Layout/Carousel";
import Layout from "@/components/Layout/index";

function OasisBot() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack direction="row" className="w-full gap-4">
          <Stack className="w-4/6 gap-4">
            <Stack direction="row" className="gap-4 h-[495px]">
              <Box className="w-2/5">
                <OasisBotRunCard />
              </Box>
              <Box className="w-3/5 gap-4 h-[495px]">
                <OasisBotListCard />
              </Box>
            </Stack>
            <Stack direction="row" className="gap-4 h-[400px]">
              <OasisBotTransactionCard />
            </Stack>
          </Stack>
          <Stack className="w-2/6 gap-4">
            <RealtimeTransactionCard />
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
