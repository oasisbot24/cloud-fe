import { Box, Stack } from "@mui/material";
import SubscribeCard from "@/cards/subscribe/SubscribeCard";
import SubscribeTitleCard from "@/cards/subscribe/SubscribeTitleCard";
import Layout from "@/layouts/Layout";

export default function Subscribe() {
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <SubscribeTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[880px]">
          <SubscribeCard />
        </Box>
      </Stack>
    </Layout>
  );
}
