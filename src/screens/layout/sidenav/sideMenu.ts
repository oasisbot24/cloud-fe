interface MenuDetail {
  name: string;
  path: string;
  icon: string;
}

interface SideMenuType {
  title: string;
  detail?: MenuDetail[];
}

const sideMenu: SideMenuType[] = [
  {
    title: "시스템",
    detail: [
      {
        name: "대시보드",
        path: "/dashboard",
        icon: "/icon/menu/dashboard.svg",
      },
      {
        name: "오아시스Bot",
        path: "/oasisbot",
        icon: "/icon/menu/oasisbot.svg",
      },
      { name: "백테스트", path: "/backtest", icon: "/icon/menu/backtest.svg" },
    ],
  },
  {
    title: "세팅",
    detail: [
      {
        name: "API 연결",
        path: "/api",
        icon: "/icon/menu/api.svg",
      },
      {
        name: "접속 거래소 변경",
        path: "/exchange",
        icon: "/icon/menu/exchange.svg",
      },
      {
        name: "프리셋 설정",
        path: "/preset",
        icon: "/icon/menu/preset.svg",
      },
    ],
  },
  {
    title: "이용",
    detail: [
      {
        name: "서비스 구독하기",
        path: "/subscribe",
        icon: "/icon/menu/subscribe.svg",
      },
    ],
  },
];

export type { MenuDetail, SideMenuType };
export { sideMenu };
