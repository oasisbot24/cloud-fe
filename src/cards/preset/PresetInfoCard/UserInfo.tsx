import { Avatar, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import GeneralInfo from "@/cards/preset/PresetInfoCard/GeneralInfo";
import authAtom from "@/datas/auth";
import { useInfoTradeStyle } from "@/hooks/query/useInfo";

export default function UserInfo() {
  const [auth] = useAtom(authAtom);
  const {
    tradeStyleQuery: { data: tradeStyleData },
  } = useInfoTradeStyle();
  return (
    <Stack className="w-full items-center gap-8">
      <Stack className="items-center gap-3">
        <Avatar className="w-[108px] h-[108px]" src={auth.picture} />
        <Typography variant="300B" className="text-font-1">
          {auth?.name}
        </Typography>
        <Typography variant="200R" className="text-font-3">
          {tradeStyleData?.tag.map(keyword => (
            <Typography key={keyword} variant="200R">
              #{keyword}
            </Typography>
          ))}
        </Typography>
      </Stack>
      <GeneralInfo type="exchange" />
      <GeneralInfo type="balance" />
      <GeneralInfo type="subscribe" />
    </Stack>
  );
}
