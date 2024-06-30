import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import SideNav from "@/components/Layout/SideNav";
import TopNav from "@/components/Layout/TopNav/index";
import useComponentSize from "@/hooks/useComponentSize";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { size, componentRef } = useComponentSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (size.width <= 1440) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }, []);

  return (
    <main className="w-full h-fit bg-[#F5F6FA]" ref={componentRef}>
      <Stack direction="row" className="w-full">
        <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Stack
          direction="column"
          justifyContent="space-between"
          className="w-full h-full"
        >
          <TopNav />
          <Box
            className={
              isMenuOpen && size.width > 1440
                ? "ml-[260px] transition-all duration-300"
                : "ml-[80px] transition-all duration-300"
            }
          >
            <Box className="w-full h-[calc(100vh-70px)] p-4 pl-8">
              {children}
            </Box>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
