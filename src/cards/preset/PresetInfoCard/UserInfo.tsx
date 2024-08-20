import { Avatar, Stack, Typography } from "@mui/material";
import GeneralInfo from "@/cards/preset/PresetInfoCard/GeneralInfo";

export default function UserInfo() {
  return (
    <Stack className="w-full items-center gap-8">
      <Stack className="items-center gap-3">
        <Avatar className="w-[108px] h-[108px]" />
        <Typography variant="300B" className="text-font-1">
          유저네임
        </Typography>
        <Typography variant="200R" className="text-font-3">
          #PLATINUM #단타 #도전적투자자
        </Typography>
      </Stack>
      <GeneralInfo type="exchange" />
      <GeneralInfo type="balance" />
      <GeneralInfo type="time" />
    </Stack>
  );
}
