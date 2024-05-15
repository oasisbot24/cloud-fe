import { Stack, Typography } from "@mui/material";
import DisplayPL from "@/cards/AssetStatusCard/DisplayPL";

export default function AssetStatusInfo() {
  const userName = "김도전";
  const keywords = ["도전적투자", "높은수익률", "단타"];
  const totalAssetAmount = "₩ 4,500,000";
  return (
    <Stack className="w-full h-full justify-between">
      <Stack direction="column" className="gap-1">
        <Typography variant="400M" className="text-neutral-100">
          Hi! {userName}님
        </Typography>
        <Stack direction="row" className="gap-1">
          {keywords.map(keyword => (
            <Typography key={keyword} variant="200R" className="text-white">
              #{keyword}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" className="gap-1">
        <Typography variant="300R" className="text-neutral-200">
          총 자산금액
        </Typography>
        <Typography variant="h4" className="text-white">
          {totalAssetAmount}
        </Typography>
      </Stack>
      <Stack direction="row" className="w-full">
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            총현황
          </Typography>
          <DisplayPL pl={-12.5} />
        </Stack>
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            승률
          </Typography>
          <DisplayPL pl={32.5} />
        </Stack>
      </Stack>
    </Stack>
  );
}
