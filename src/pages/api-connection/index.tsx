import { Box, Stack } from "@mui/material";
import ApiConnectionCard from "@/cards/api-connection/ApiConnectionCard";
import ApiConnectionTitleCard from "@/cards/api-connection/ApiConnectionTitleCard";
import Layout from "@/layouts/Layout";

function ApiConnection() {
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <ApiConnectionTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[480px]">
          <ApiConnectionCard />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ApiConnection;
