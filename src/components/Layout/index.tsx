import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Stack } from "@mui/material";
import SideNav from "@/components/Layout/Sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="w-full bg-[#F5F6FA]">
      <Stack direction="row" className="w-full">
        <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Stack
          direction="column"
          justifyContent="space-between"
          className="w-full h-full"
        >
          <Stack
            direction="row"
            className="w-full h-[70px] px-4 shrink-0 bg-white shadow-sm justify-between items-center"
          >
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon />
            </IconButton>
            User info
          </Stack>
          <Box
            className={
              isMenuOpen
                ? "ml-[260px] transition-all duration-300"
                : "ml-[0px] transition-all duration-300"
            }
          >
            <Box className="w-full p-4 pl-8">{children}</Box>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
