import React from "react";
import { Paper, Stack } from "@mui/material";

interface TopNavLayoutProps {
  children: React.ReactNode;
}

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  return (
    <main className="w-full h-screen">
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
            className="h-full px-4 text-white"
          >
            <div>Logo</div>
            <div>Nav</div>
          </Stack>
        </Paper>
        <div className="px-16 py-8 h-full">{children}</div>
      </Stack>
    </main>
  );
}
