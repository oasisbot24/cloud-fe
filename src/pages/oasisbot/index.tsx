import { Box, Stack } from "@mui/material";
import BotListCard from "@/cards/BotListCard";
import OasisBotTransactionCard from "@/cards/OasisBotTransactionCard";
import Layout from "@/components/Layout";
import Carousel from "@/components/Layout/Carousel";

function OasisBot() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack direction="row" className="gap-4">
          <Stack className="gap-4 w-8/12">
            <Stack direction="row" className="gap-4 h-[434px]">
              <Box className=" w-2/5">
                <BotListCard />
              </Box>
              <Box className="w-3/5">
                <BotListCard />
              </Box>
            </Stack>
            <Stack direction="row" className="h-[460px]">
              <OasisBotTransactionCard />
            </Stack>
          </Stack>
          <Stack className="w-4/12">
            <BotListCard />
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
