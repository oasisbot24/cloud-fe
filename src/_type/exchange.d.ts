type ExchangeType = "okx" | "upbit" | "binance" | "lbank";

type ExchangeParams = {
  exchange: ExchangeType;
};

declare namespace ExchangeConnection {
  interface PostOkxOauthTokenBody {
    code: string;
  }

  interface PostSmartAccessResultBody {
    uid: string;
  }
}
