import { Box, Stack } from "@mui/material";
import SideNav from "@/components/Layout/Sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-[#F5F6FA]">
      <Stack direction="row" className="w-full">
        <SideNav />
        <Stack
          direction="column"
          justifyContent="space-between"
          className="w-full h-full"
        >
          <Stack
            direction="row"
            className="w-full h-[70px] shrink-0 bg-white shadow-sm justify-end items-center"
          >
            User info
          </Stack>
          <Box className="ml-[260px]">
            <Box className="w-full p-4 pl-8">{children}</Box>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
