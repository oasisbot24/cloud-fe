import { Box, Stack } from "@mui/material";
import { useAtomValue } from "jotai";

import OasisBotListCard from "@/cards/oasisbot/OasisBotListCard";
import OasisBotRunCard from "@/cards/oasisbot/OasisBotRunCard";
import OasisBotSelectCard from "@/cards/oasisbot/OasisBotSelectCard";
import OasisBotTotalCardList from "@/cards/oasisbot/OasisBotTotalCard/list";
import OasisBotTransactionCard from "@/cards/oasisbot/OasisBotTransactionCard";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import { useBotDetailQuery } from "@/hooks/query/useOasisBot";
import Carousel from "@/layouts/Carousel";
import Layout from "@/layouts/Layout";

function OasisBot() {
  const selectedRow = useAtomValue(selectedBotRowAtom);
  const { botDetailQuery } = useBotDetailQuery(selectedRow[0]);
  const { data } = botDetailQuery;

  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack direction="row" className="w-full gap-4">
          <Stack className="w-4/6 gap-4">
            <Stack direction="row" className="h-[495px] gap-4">
              <Box className="w-2/5">
                {!!data?.id ? <OasisBotSelectCard /> : <OasisBotRunCard />}
              </Box>
              <Box className="h-[495px] w-3/5 gap-4">
                <OasisBotListCard nav="oasisbot" />
              </Box>
            </Stack>
            <Stack direction="row" className="h-[540px] gap-4">
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
