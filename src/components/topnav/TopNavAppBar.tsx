import { useState } from "react";
import Image from "next/image";
import { AppBar, IconButton, Stack } from "@mui/material";
import { useAtom } from "jotai";
import TopNavMenu from "@/components/topnav/TopNavMenu";
import TopNavRouteList from "@/components/topnav/TopNavRouteList";
import authAtom from "@/datas/auth";

export default function TopNavAppBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [auth] = useAtom(authAtom);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(!isOpened);
  };

  return (
    <AppBar position="static" className="bg-darkBlue h-[60px]">
      <Stack
        direction="row"
        className="h-full px-4 text-center items-center justify-between gap-[20px]"
      >
        <div className="w-1/12 h-full shrink-0">
          <Image
            src="/logo/oasis-white.svg"
            alt="logo"
            width={60}
            height={60}
          />
        </div>
        <Stack
          direction="row"
          className="w-5/6 items-center justify-between gap-[20px]"
        >
          <TopNavRouteList />
        </Stack>
        <Stack className="w-1/12 items-center shrink-0">
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
