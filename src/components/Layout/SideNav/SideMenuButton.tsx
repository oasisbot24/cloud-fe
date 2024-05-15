import { useRouter } from "next/router";
import { ButtonBase, Stack, Typography } from "@mui/material";
import SidenavIcon from "@/components/Icon/SidenavIcon";
import { MenuDetail } from "@/components/Layout/SideNav/sideMenu";

interface SideMenuButtonProps {
  detail: MenuDetail;
}

export default function SideMenuButton({ detail }: SideMenuButtonProps) {
  const { pathname } = useRouter();
  return (
    <ButtonBase className="w-full h-[50px]">
      <Stack direction="row" className="w-full h-full items-center gap-4">
        <SidenavIcon id={detail.id} isFocus={pathname === detail.path} />
        {pathname === detail.path ? (
          <Typography variant="300B" className="text-brand">
            {detail.name}
          </Typography>
        ) : (
          <Typography variant="300R" className="text-sub-4">
            {detail.name}
          </Typography>
        )}
      </Stack>
    </ButtonBase>
  );
}
