/* Dependencies */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Paper, Stack } from "@mui/material";
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
    path: "/bot",
  },
  {
    name: "백테스트",
    path: "/backtest",
  },
  {
    name: "프리셋 연결",
    path: "/preset",
  },
  {
    name: "API 연결",
    path: "/api",
  },
];

export default function TopNavLayout({ children }: TopNavLayoutProps) {
  const [auth] = useAtom(authAtom);
  const router = useRouter();
  const { pathname } = router;
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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="w-5/6 gap-[20px]"
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
              <Image
                src={auth?.picture}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Stack>
          </Stack>
        </Paper>
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
  );
}
