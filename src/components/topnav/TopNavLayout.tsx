/* Dependencies */
import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import Footer from "@/components/basic/Footer";
import TopNavAppBar from "@/components/topnav/TopNavAppBar";

/* interfaces */
interface TopNavLayoutProps {
  children: React.ReactNode;
}

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  return (
    <main className="w-full h-screen">
      <Stack className="h-full">
        <TopNavAppBar />
        <Stack
          direction="row"
          justifyContent="between"
          className="min-h-[calc(100%-60px)] h-[calc(100%-60px)] px-4 gap-[20px]"
        >
          <div className="w-1/12 shrink-0" />
          <Stack
            direction="column"
            justifyContent="space-between"
            className="w-5/6 py-6 z-10"
          >
            {children}
            <Footer center />
          </Stack>
          <div className="w-1/12 shrink-0" />
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
  );
}
