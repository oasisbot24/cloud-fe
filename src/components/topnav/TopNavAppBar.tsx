import Image from "next/image";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import route from "@/components/topnav/route";
import authAtom from "@/datas/auth";
import settingAtom from "@/datas/setting";

interface TopNavAppBarProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

export default function TopNavAppBar({
  isOpened,
  setIsOpened,
}: TopNavAppBarProps) {
  const router = useRouter();
  const { pathname } = router;
  const [auth] = useAtom(authAtom);
  const [setting] = useAtom(settingAtom);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(!isOpened);
  };

  return (
    <AppBar position="static" className="bg-darkBlue h-[60px]">
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="shrink-0 w-5/6 gap-[20px]"
        >
          {route.map(item => (
            <Button
              key={item.name}
              variant={pathname === item.path ? "contained" : "text"}
              className={`w-1/5 ${
                pathname === item.path
                  ? setting.botStatus.isRunning
                    ? "bg-black text-white"
                    : "bg-white text-black"
                  : ""
              }`}
              color="inherit"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
        <Stack className="w-1/12 items-center">
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              color="inherit"
            >
              <Image
                src={auth?.picture}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </IconButton>
            {isOpened && (
              <Paper className="absolute top-[60px] right-0 min-w-[220px] z-[999]">
                <MenuList>
                  <div className="px-4 py-2 text-left">
                    <Typography variant="body1">{auth?.name}</Typography>
                    <Typography variant="body2" className="text-gray-500">
                      {auth?.email}
                    </Typography>
                  </div>
                  <Divider className="my-2" />
                  <MenuItem onClick={() => {}} className="px-4">
                    <SettingsIcon className="text-gray-500 mr-2" />
                    거래소 변경
                  </MenuItem>
                  <MenuItem onClick={() => {}} className="px-4">
                    <PersonIcon className="text-gray-500 mr-2" />
                    요금 안내
                  </MenuItem>
                  <MenuItem onClick={() => {}} className="px-4">
                    <StarIcon className="text-gray-500 mr-2" />
                    API 연결
                  </MenuItem>
                  <Divider className="my-2" />
                  <MenuItem onClick={() => {}} className="px-4">
                    <LogoutIcon className="text-gray-500 mr-2" />
                    로그아웃
                  </MenuItem>
                </MenuList>
              </Paper>
            )}
          </div>
        </Stack>
      </Stack>
    </AppBar>
  );
}
