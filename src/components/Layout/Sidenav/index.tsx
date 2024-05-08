import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ServiceCenter from "@/components/Layout/Sidenav/ServiceCenter";
import SideMenuButton from "@/components/Layout/Sidenav/SideMenuButton";
import { sideMenu } from "@/components/Layout/Sidenav/sideMenu";
import Logo from "@/components/Logo";

interface SideNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function SideNav({ isMenuOpen, setIsMenuOpen }: SideNavProps) {
  return (
    <Stack
      direction="column"
      className={
        isMenuOpen
          ? "sidenav px-4 py-8 ml-0 transition-all duration-300"
          : "sidenav px-4 py-8 ml-[-260px] transition-all duration-300"
      }
    >
      <Stack
        direction="row"
        className="w-full relative justify-center items-center"
      >
        <Logo color="black" size="L" />
        <IconButton
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-0"
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </Stack>
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
