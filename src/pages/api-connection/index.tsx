import { Box, Stack } from "@mui/material";
import ApiConnectionCard from "@/cards/ApiConnectionCard";
import ApiConnectionTitleCard from "@/cards/ApiConnectionTitleCard";
import Layout from "@/layouts/Layout";

function OasisBot() {
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <ApiConnectionTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[480px] h-[628px]">
          <ApiConnectionCard />
        </Box>
      </Stack>
    </Layout>
  );
}

export default OasisBot;
