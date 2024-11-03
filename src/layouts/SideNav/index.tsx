import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Logo from "@/components/Logo";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import ServiceCenter from "@/layouts/SideNav/ServiceCenter";
import SideMenuButton from "@/layouts/SideNav/SideMenuButton";
import { sideMenu } from "@/layouts/SideNav/sideMenu";

interface SideNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function SideNav({ isMenuOpen, setIsMenuOpen }: SideNavProps) {
  const passPath = ["/api-connection", "/subscribe", "/mypage", "/payment"];
  const {
    userExchangeQuery: { data },
  } = useUserExchangesQuery();

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    if (!data || data.length === 0) setIsConnected(false);
    else setIsConnected(true);
  }, [data]);
  return (
    <Stack
      direction="column"
      className={
        isMenuOpen
          ? "sidenav px-4 py-8 ml-0 transition-all duration-300 justify-between"
          : "sidenav px-4 py-8 w-[80px] transition-all duration-300 justify-between"
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
          <Box
            className={`transition-all duration-300 ${isMenuOpen ? "ml-4" : "mx-auto"}`}
          >
            <Typography variant="200M" className="text-sub-4">
              {menu.title}
            </Typography>
          </Box>
          {menu.detail?.map(detail => (
            <SideMenuButton
              key={detail.name}
              detail={detail}
              iconOnly={!isMenuOpen}
              disabled={
                detail.id === "oasislab"
                  ? true
                  : !isConnected && !passPath.includes(detail.path)
              }
            />
          ))}
        </Stack>
      ))}
      <ServiceCenter iconOnly={!isMenuOpen} />
    </Stack>
  );
}
