/* Dependencies */
import React from "react";
import Image from "next/image";
import { Paper, Stack } from "@mui/material";

/* Components */
import Footer from "@/components/basic/Footer";

/* interfaces */
interface TopNavLayoutProps {
  children: React.ReactNode;
}

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  return (
    <main className="w-full h-screen bg-gray-80">
      <Stack className="h-full">
        <Paper
          variant="elevation"
          square
          elevation={4}
          className="bg-darkBlue h-[60px]"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="h-full px-4 text-center text-white gap-[20px]"
          >
            <div className="w-1/12 h-full">
              <Image
                src="/logo/oasis-white.svg"
                alt="logo"
                width={60}
                height={60}
              />
            </div>
            <div className="w-5/6">Logo</div>
            <div className="w-1/12">Nav</div>
          </Stack>
        </Paper>
        <div className="px-16 py-8 h-full z-10">{children}</div>
        <Image
          src="/main/hero-bg.png"
          width={1800}
          height={234}
          className="w-full h-auto fixed bottom-0 z-0"
          alt="bg"
        />
        <Footer mb={2.5} center />
      </Stack>
    </main>
  );
}
