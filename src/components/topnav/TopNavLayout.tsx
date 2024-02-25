/* Dependencies */
import React, { useState } from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import Footer from "@/components/basic/Footer";
import TopNavAppBar from "@/components/topnav/TopNavAppBar";

/* interfaces */
interface TopNavLayoutProps {
  children: React.ReactNode;
}

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  const [isOpened, setIsOpened] = useState(false);

  const closeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(false);
  };

  return (
    <Box onClick={closeMenu}>
      <main className="w-full h-screen">
        <Stack className="h-full">
          <TopNavAppBar isOpened={isOpened} setIsOpened={setIsOpened} />
          <Stack
            direction="row"
            justifyContent="between"
            className="min-h-[calc(100%-60px)] h-[calc(100%-60px)] px-4 gap-[20px]"
          >
            <div className="w-1/12" />
            <Stack
              direction="column"
              justifyContent="space-between"
              className="w-5/6 py-6 z-10"
            >
              {children}
              <Footer center />
            </Stack>
            <div className="w-1/12" />
          </Stack>
          <Image
            src="/main/hero-bg.png"
            width={1800}
            height={234}
            className="w-full h-auto fixed bottom-0 z-0"
            alt="bg"
          />
        </Stack>
      </main>
    </Box>
  );
}
