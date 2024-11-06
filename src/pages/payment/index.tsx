import { Box, Stack } from "@mui/material";

import PaymentCard from "@/cards/payment/PaymentCard";
import PaymentTitleCard from "@/cards/payment/PaymentTitleCard";
import Layout from "@/layouts/Layout";

export default function Payment() {
  return (
    <Layout>
      <Box className="h-[530px] w-full">
        <PaymentTitleCard />
      </Box>
      <Stack className="relative mt-[-250px] items-center justify-start pb-4">
        <Box className="w-[480px]">
          <PaymentCard />
        </Box>
      </Stack>
    </Layout>
  );
}
