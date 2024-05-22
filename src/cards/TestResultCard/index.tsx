import { useEffect, useRef, useState } from "react";
import { Stack, Typography } from "@mui/material";
import OasisLabIcon from "@/components/Icon/OasisLabIcon";
import Card from "../Card";
import LiquidProgress from "./LiquidProgress";

export default function TestResultCard() {
  return (
    <Card>
      <Stack p={2}>
        <Stack direction="row" spacing={2}>
          <OasisLabIcon id="test-result" />

          <Stack>
            <Typography variant="300B" color={"#222222"}>
              테스트 연구 결과 (진행률/승률)
            </Typography>
            <Typography variant="100R" color={"#B0B3B7"}>
              오늘 16:29/월 평균 매매 횟 420회
            </Typography>
          </Stack>
        </Stack>

        <LiquidProgress />
      </Stack>
    </Card>
  );
}
