// layout
type LayoutColorType = "white" | "black";
type MenuDetailIdType =
  | "dashboard"
  | "oasisbot"
  | "oasislab"
  | "api"
  | "exchange"
  | "preset"
  | "subscribe"
  | "notice";

// icons
type HappinessType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type DashboardIdType =
  | "bar-graph"
  | "bot-start"
  | "history"
  | "lab"
  | "lab-on"
  | "lab-result"
  | "pie-chart"
  | "ranking"
  | "rise-arrow"
  | "setting"
  | "transaction"
  | "wallet";
type SocialType = "linkedin" | "facebook" | "naver" | "kakao";

// apis
interface ApiResponseType<T> {
  data: T;
  status: number;
  msg: string;
}

// oasislab
type OasisLabIdType = "set" | "current" | "max";
