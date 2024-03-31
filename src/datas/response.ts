export interface Response {
  state: State;
  msg: string;
}

enum State {
  "success",
  "fail",
}
