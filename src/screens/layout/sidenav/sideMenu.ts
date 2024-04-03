type MenuDetailIdType =
  | "dashboard"
  | "oasisbot"
  | "backtest"
  | "api"
  | "exchange"
  | "preset"
  | "subscribe"
  | "notice";

interface MenuDetail {
  id: MenuDetailIdType;
  name: string;
  path: string;
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
        id: "dashboard",
        name: "대시보드",
        path: "/dashboard",
      },
      {
        id: "oasisbot",
        name: "오아시스Bot",
        path: "/oasisbot",
      },
      { id: "backtest", name: "백테스트", path: "/backtest" },
    ],
  },
  {
    title: "세팅",
    detail: [
      {
        id: "api",
        name: "API 연결",
        path: "/api",
      },
      {
        id: "exchange",
        name: "접속 거래소 변경",
        path: "/exchange",
      },
      {
        id: "preset",
        name: "프리셋 설정",
        path: "/preset",
      },
    ],
  },
  {
    title: "이용",
    detail: [
      {
        id: "subscribe",
        name: "서비스 구독하기",
        path: "/subscribe",
      },
      {
        id: "notice",
        name: "공지사항",
        path: "/notice",
      },
    ],
  },
];

export type { MenuDetail, SideMenuType, MenuDetailIdType };
export { sideMenu };
