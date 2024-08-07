// layout
type LayoutColorType = "white" | "black";
type MenuDetailIdType =
  | "dashboard"
  | "oasisbot"
  | "oasislab"
  | "api"
  | "exchange"
  | "preset"
  | "mypage"
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
  | "wallet"
  | "counting";
type SocialType = "linkedin" | "facebook" | "naver" | "kakao";

// exchange
type ExchangeType = "okx" | "upbit";

// apis
interface ApiResponseType<T> {
  data: T;
  status: number;
  msg: string;
}

// agreement
type AgreementType = "over14" | "service" | "privacy" | "marketing";

// oasislab
type OasisLabIdType = "set" | "current" | "max";

// bot transaction
interface BotTransaction {
  id: number;
  market: string;
  item: string;
  profit: BotTransactionProfit;
  tradeTime: string;
  status: string;
}

interface BotTransactionProfit {
  money: number;
  rate: number;
}

interface BotTransactionQuantity {
  money: number;
  rate: number;
}

interface BotTransactionPrice {
  money: number;
  contents: string;
}

// profit
interface ProfitRank {
  id: number;
  user: {
    icon: string;
    nickname: string;
  };
  accumulatedProfit: number;
  market: ExchangeType;
  item: string;
  period: string;
}

// transaction
interface RealtimeTransaction {
  id: number;
  presetName: string;
  coinName: string;
  sellInfo: {
    exchange: ExchangeType;
    price: number;
    date: string;
  };
  buyInfo: {
    exchange: ExchangeType;
    price: number;
    date: string;
  };
}

// subscribe
type SubscribeType = "free" | "promotion" | "allinone";
type SubscribeMonth = 1 | 3;
