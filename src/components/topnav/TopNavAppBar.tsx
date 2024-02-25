import Image from "next/image";
import { useRouter } from "next/router";
import { AppBar, Button, IconButton, Stack } from "@mui/material";
import { useAtom } from "jotai";
import TopNavMenu from "@/components/topnav/TopNavMenu";
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
            {isOpened && <TopNavMenu />}
          </div>
        </Stack>
      </Stack>
    </AppBar>
  );
}
