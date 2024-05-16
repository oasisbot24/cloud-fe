import { useRouter } from "next/router";
import { ButtonBase, Stack, Typography } from "@mui/material";
import SidenavIcon from "@/components/Icon/SidenavIcon";
import { MenuDetail } from "@/components/Layout/SideNav/sideMenu";

interface SideMenuButtonProps {
  detail: MenuDetail;
  iconOnly?: boolean;
}

export default function SideMenuButton({
  detail,
  iconOnly,
}: SideMenuButtonProps) {
  const { push } = useRouter();
  const { pathname } = useRouter();
  return (
    <ButtonBase
      className="w-full h-[50px] rounded-full"
      onClick={() => push(detail.path)}
    >
      <Stack
        direction="row"
        className={`w-full h-full items-center gap-4 overflow-x-hidden ${iconOnly ? "justify-center" : "px-4"}`}
      >
        <SidenavIcon id={detail.id} isFocus={pathname === detail.path} />
        {!iconOnly &&
          (pathname === detail.path ? (
            <Typography variant="300B" className="text-brand">
              {detail.name}
            </Typography>
          ) : (
            <Typography variant="300R" className="text-sub-4">
              {detail.name}
            </Typography>
          ))}
      </Stack>
    </ButtonBase>
  );
}
