import React from "react";
import { Stack } from "@mui/material";
import OasisBotTotalCard from "@/cards/oasisbot/OasisBotTotalCard/index";

function OasisBotTotalCardList() {
  return (
    <Stack spacing={2}>
      <OasisBotTotalCard
        id="total"
        title="실시간 총 거래금액"
        subtitle="오늘 16:29 기준"
        color="#223CE9"
      />
    </Stack>
  );
}

export default OasisBotTotalCardList;
