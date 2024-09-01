import { Box, Stack } from "@mui/material";
import RealtimeTransactionCard from "@/cards/.depreciated/RealtimeTransactionCard";
import OasisBotListCard from "@/cards/oasisbot/OasisBotListCard";
import OasisBotRunCard from "@/cards/oasisbot/OasisBotRunCard";
import OasisBotTotalCardList from "@/cards/oasisbot/OasisBotTotalCard/list";
import OasisBotTransactionCard from "@/cards/oasisbot/OasisBotTransactionCard";
import Carousel from "@/layouts/Carousel";
import Layout from "@/layouts/Layout";

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
            <OasisBotTotalCardList />
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
