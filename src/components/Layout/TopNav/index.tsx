import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack } from "@mui/material";
import NotificationBadge from "@/components/Layout/TopNav/NotificationBadge";
import UserProfile from "@/components/Layout/TopNav/UserProfile";

interface TopNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function TopNav({ setIsMenuOpen, isMenuOpen }: TopNavProps) {
  return (
    <Stack
      direction="row"
      className="w-full h-[70px] px-4 shrink-0 bg-white shadow-sm justify-between items-center"
    >
      <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon />
      </IconButton>
      <Stack direction="row" className="gap-4">
        <NotificationBadge />
        <UserProfile />
      </Stack>
    </Stack>
  );
}
