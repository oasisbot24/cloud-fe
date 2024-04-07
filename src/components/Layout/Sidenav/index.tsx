import { Box, Stack, Typography } from "@mui/material";
import ServiceCenter from "@/components/Layout/Sidenav/ServiceCenter";
import SideMenuButton from "@/components/Layout/Sidenav/SideMenuButton";
import { sideMenu } from "@/components/Layout/Sidenav/sideMenu";
import Logo from "@/components/Logo";

export default function SideNav() {
  return (
    <Stack direction="column" className="sidenav px-4 py-8">
      <Logo color="black" size="L" />
      {sideMenu.map(menu => (
        <Stack
          key={menu.title}
          direction="column"
          className="w-full px-4 gap-1"
        >
          <Box className="w-full">
            <Typography variant="200M" className="text-sub-4">
              {menu.title}
            </Typography>
          </Box>
          {menu.detail?.map(detail => (
            <SideMenuButton key={detail.name} detail={detail} />
          ))}
        </Stack>
      ))}
      <ServiceCenter />
    </Stack>
  );
}
