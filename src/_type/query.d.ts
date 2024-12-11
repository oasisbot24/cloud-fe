interface ResponseT<Data> {
  data: Data;
  status: number;
  msg: string;
}

interface RequestT<Body, Params = undefined> {
  body: Body;
  params?: Params;
}
