import React from "react";
import { Stack } from "@mui/material";
import OasisBotTotalCard from "@/cards/oasisbot/OasisBotTotalCard/index";

function OasisBotTotalCardList() {
  return (
    <Stack spacing={2}>
      <OasisBotTotalCard
        id="total"
        title="실시간 총 거래금액"
        subtitle="7일 기준"
        color="#223CE9"
        value="53,000,000,000"
        unit="원"
      />
      <OasisBotTotalCard
        id="bot-transaction"
        title="실시간 총 거래횟수"
        subtitle="7일 기준"
        color="#2BB7F5"
        value="1000"
        unit="회"
      />
      <OasisBotTotalCard
        id="profit-rate"
        title="나의 봇 수익률 Top 1"
        subtitle="업비트 거래소의 상승장프리셋임 - 비트코인"
        color="#F46565"
        value="377"
        unit="%"
      />
      <OasisBotTotalCard
        id="winning-rate"
        title="나의 봇 승률 Top 1"
        subtitle="업비트 거래소의 상승장 프리셋임 - 비트코인"
        color="#223CE9"
        value="93"
        unit="%"
      />
      <OasisBotTotalCard
        id="copied-presets"
        title="실시간 운용자산"
        subtitle="업비트 거래소 기준"
        color="#2BB7F5"
        value=""
        unit=""
      />
    </Stack>
  );
}

export default OasisBotTotalCardList;
