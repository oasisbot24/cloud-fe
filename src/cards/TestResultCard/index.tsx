import { Stack, Typography } from "@mui/material";
import DashboardIcon from "@/components/Icon/DashboardIcon";
import Card from "../Card";
import LiquidProgress from "./LiquidProgress";
import PieChart from "./PieChart";
import PieSvg from "./PieSvg";

export default function TestResultCard() {
  return (
    <Card>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <DashboardIcon id="lab-on" />
          <Stack>
            <Typography variant="300B" className="text-[#222222]">
              테스트 연구 결과 (진행률/승률)
            </Typography>
            <Typography variant="100R" className="text-[#B0B3B7]">
              오늘 16:29/월 평균 매매 횟 420회
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <LiquidProgress />
          <PieChart />
        </Stack>
      </Stack>
    </Card>
  );
}
