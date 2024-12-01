interface ApiResponseType<Data> {
  data: Data;
  status: number;
  msg: string;
}

interface ApiRequestType<Body, Params = undefined> {
  body: Body;
  params: Params;
}

type ExchangeParams = {
  exchange: ExchangeType;
};

declare namespace MutationBody {
  interface PostOkxOauthTokenBody {
    code: string;
  }

  interface PostSmartAccessResultBody {
    uid: string;
  }
}

declare namespace QueryData {
  interface CoinRatio {}
}
