import { ButtonBase, Stack, Typography } from "@mui/material";
import Icon from "@/screens/Icon";
import { MenuDetail } from "@/screens/Layout/Sidenav/sideMenu";

interface SideMenuButtonProps {
  detail: MenuDetail;
}

export default function SideMenuButton({ detail }: SideMenuButtonProps) {
  return (
    <ButtonBase className="w-full h-[50px]">
      <Stack direction="row" className="w-full h-full items-center gap-4">
        <Icon src="/dashboard/card-media.png" />
        <Typography variant="300R">{detail.name}</Typography>
      </Stack>
    </ButtonBase>
  );
}
