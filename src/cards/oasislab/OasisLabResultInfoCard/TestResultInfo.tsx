import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import authAtom from "@/datas/auth";

import DisplayPL from "./DisplayPL";

interface TestResultInfoProps {
  testResult?: {
    profitLossAmount: number;
    profit: number;
    loss: number;
    tag: string[];
  } | null;
}
export default function TestResultInfo({ testResult }: TestResultInfoProps) {
  const [user] = useAtom(authAtom);
  const userName = user.name;
  return (
    <Stack className="h-full w-full justify-between">
      <Stack direction="column" className="gap-1">
        <Typography variant="400M" className="text-neutral-100">
          Hi! {userName}님
        </Typography>
        <Stack direction="row" className="gap-1">
          {testResult?.tag.map(keyword => (
            <Typography key={keyword} variant="200R" className="text-white">
              #{keyword}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" className="gap-1">
        <Typography variant="300R" className="text-neutral-200">
          총 손익금액
        </Typography>
        <Typography variant="h4" className="text-white">
          ₩ {testResult?.profitLossAmount ?? 0}
        </Typography>
      </Stack>
      <Stack direction="row" className="w-full">
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            수익
          </Typography>
          <DisplayPL pl={testResult?.profit ?? 0} />
        </Stack>
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            손해
          </Typography>
          <DisplayPL pl={testResult?.loss ?? 0} />
        </Stack>
      </Stack>
    </Stack>
  );
}
