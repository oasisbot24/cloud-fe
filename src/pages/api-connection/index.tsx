import { Box, Stack } from "@mui/material";

import ApiConnectionCard from "@/cards/api-connection/ApiConnectionCard";
import ApiConnectionTitleCard from "@/cards/api-connection/ApiConnectionTitleCard";
import Layout from "@/layouts/Layout";

function ApiConnection() {
  return (
    <Layout>
      <Box className="h-[530px] w-full">
        <ApiConnectionTitleCard />
      </Box>
      <Stack className="relative mt-[-250px] items-center justify-start pb-4">
        <Box className="w-[480px]">
          <ApiConnectionCard />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ApiConnection;
