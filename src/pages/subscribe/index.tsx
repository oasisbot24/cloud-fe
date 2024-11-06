import { Box, Stack } from "@mui/material";

import SubscribeCard from "@/cards/subscribe/SubscribeCard";
import SubscribeTitleCard from "@/cards/subscribe/SubscribeTitleCard";
import Layout from "@/layouts/Layout";

export default function Subscribe() {
  return (
    <Layout>
      <Box className="h-[530px] w-full">
        <SubscribeTitleCard />
      </Box>
      <Stack className="relative mt-[-250px] items-center justify-start pb-4">
        <Box className="w-[880px]">
          <SubscribeCard />
        </Box>
      </Stack>
    </Layout>
  );
}
