import { Stack } from "@mui/material";
import NotificationBadge from "@/components/Layout/TopNav/NotificationBadge";
import UserProfile from "@/components/Layout/TopNav/UserProfile";

export default function TopNav() {
  return (
    <Stack
      direction="row"
      className="w-full h-[70px] px-4 shrink-0 bg-white shadow-sm justify-end items-center"
    >
      <Stack direction="row" className="gap-4">
        <NotificationBadge />
        <UserProfile />
      </Stack>
    </Stack>
  );
}
