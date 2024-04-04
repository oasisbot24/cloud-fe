import { Box, Stack } from "@mui/material";
import SideNav from "@/components/Layout/Sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen bg-[#F5F6FA]">
      <Stack direction="row" className="w-full h-full">
        <SideNav />
        <Stack
          direction="column"
          justifyContent="space-between"
          className="w-full"
        >
          <Stack
            direction="row"
            className="w-full h-[70px] shrink-0 bg-white shadow-sm justify-end items-center"
          >
            User info
          </Stack>
          <Box className="w-full h-full p-4">{children}</Box>
        </Stack>
      </Stack>
    </main>
  );
}
