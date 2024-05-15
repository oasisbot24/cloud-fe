import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ServiceCenter from "@/components/Layout/SideNav/ServiceCenter";
import SideMenuButton from "@/components/Layout/SideNav/SideMenuButton";
import { sideMenu } from "@/components/Layout/SideNav/sideMenu";
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
          : "sidenav px-4 py-8 w-[80px] transition-all duration-300"
      }
    >
      <Stack direction="row" className="w-full justify-center items-center">
        <Logo color="black" size="L" logoOnly={!isMenuOpen} />
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{
            boxShadow: "2px 2px 5px 0px #D1D9E6E5",
          }}
          className="absolute right-[-16px] rounded-full border-2 border-white w-[32px] h-[32px] bg-[#F9F7F7]"
        >
          <KeyboardArrowLeftIcon
            fontSize="medium"
            className={isMenuOpen ? "rotate-0" : "rotate-180"}
          />
        </IconButton>
      </Stack>
      {sideMenu.map(menu => (
        <Stack key={menu.title} direction="column" className="w-full gap-1">
          <Box className={`w-full ${isMenuOpen ? "px-4" : "text-center"}`}>
            <Typography variant="200M" className="text-sub-4">
              {menu.title}
            </Typography>
          </Box>
          {menu.detail?.map(detail => (
            <SideMenuButton
              key={detail.name}
              detail={detail}
              iconOnly={!isMenuOpen}
            />
          ))}
        </Stack>
      ))}
      <ServiceCenter iconOnly={!isMenuOpen} />
    </Stack>
  );
}
