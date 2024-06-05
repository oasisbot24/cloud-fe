import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import DisplayPL from "@/cards/AssetStatusCard/DisplayPL";
import authAtom from "@/datas/auth";
import useTradeStyle from "@/hooks/query/useTradeStyle";

export default function AssetStatusInfo() {
  const [user] = useAtom(authAtom);
  const { tradeStyleQuery } = useTradeStyle();
  const { data: tradeStyleData } = tradeStyleQuery;
  const userName = user.name;
  return (
    <Stack className="w-full h-full justify-between">
      <Stack direction="column" className="gap-1">
        <Typography variant="400M" className="text-neutral-100">
          Hi! {userName}님
        </Typography>
        <Stack direction="row" className="gap-1">
          {tradeStyleData?.tag.map(keyword => (
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
          ₩ {tradeStyleData?.accountBalance ?? 0}
        </Typography>
      </Stack>
      <Stack direction="row" className="w-full">
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            총현황
          </Typography>
          <DisplayPL pl={tradeStyleData?.totalProfitLossRate ?? 0} />
        </Stack>
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            승률
          </Typography>
          <DisplayPL pl={tradeStyleData?.winRate ?? 0} />
        </Stack>
      </Stack>
    </Stack>
  );
}
