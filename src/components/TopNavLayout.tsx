/* Dependencies */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import {
  AppBar,
  Box,
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

/* Components */
import Footer from "@/components/basic/Footer";
import authAtom from "@/datas/auth";

/* interfaces */
interface TopNavLayoutProps {
  children: React.ReactNode;
}

const route = [
  {
    name: "대시보드",
    path: "/main",
  },
  {
    name: "오아시스 봇",
    path: "/oasisbot",
  },
  {
    name: "백테스트",
    path: "/backtest",
  },
  {
    name: "프리셋 연결",
    path: "/preset",
  },
];

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  const [auth] = useAtom(authAtom);
  const [isOpened, setIsOpened] = useState(false);

  const openMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(true);
  };

  const closeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpened(false);
  };

  const router = useRouter();
  const { pathname } = router;
  return (
    <Box onClick={closeMenu}>
      <main className="w-full h-screen">
        <Stack className="h-full">
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
                      pathname === item.path ? "bg-white text-black" : ""
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
                    onClick={openMenu}
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
          <Stack
            direction="row"
            justifyContent="between"
            className="min-h-[calc(100%-60px)] h-[calc(100%-60px)] px-4 gap-[20px]"
          >
            <div className="w-1/12" />
            <Stack
              direction="column"
              justifyContent="space-between"
              className="w-5/6 py-6 z-10"
            >
              {children}
              <Footer center />
            </Stack>
            <div className="w-1/12" />
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
    </Box>
  );
}
