import { Box, Stack } from "@mui/material";
import MypageCard from "@/cards/mypage/MypageCard";
import MypageTitleCard from "@/cards/mypage/MypageTitleCard";
import Layout from "@/layouts/Layout";

function OasisBot() {
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <MypageTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[480px]">
          <MypageCard />
        </Box>
      </Stack>
    </Layout>
  );
}

export default OasisBot;
