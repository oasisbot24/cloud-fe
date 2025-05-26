interface ResponseT<Data> {
  data: Data;
  state: string;
  msg: string;
}

interface RequestT<Body, Params = undefined> {
  body: Body;
  params?: Params;
}
