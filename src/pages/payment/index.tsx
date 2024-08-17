import { Box, Stack } from "@mui/material";
import PaymentCard from "@/cards/payment/PaymentCard";
import PaymentTitleCard from "@/cards/payment/PaymentTitleCard";
import Layout from "@/layouts/Layout";

export default function Payment() {
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <PaymentTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[480px]">
          <PaymentCard />
        </Box>
      </Stack>
    </Layout>
  );
}
