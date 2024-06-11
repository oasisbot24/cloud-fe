import { Stack } from "@mui/material";
import CardHeader from "@/cards/CardHeader";
import Card from "../Card";
import LiquidProgress from "./LiquidProgress";
import PieChart from "./PieChart";

export default function TestResultCard() {
  return (
    <Card>
      <Stack spacing={3}>
        <CardHeader
          title="테스트 연구 결과 (진행률/승률)"
          id="lab-on"
          subtitle="오늘 16:29/월 평균 매매 횟 420회"
        />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <LiquidProgress />
          <PieChart />
        </Stack>
      </Stack>
    </Card>
  );
}
