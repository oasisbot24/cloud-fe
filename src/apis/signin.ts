import api from "@/apis/network";

export function signin(credential: string) {
  return api.post("/signin", { credential });
}

export function signinAccessToken(accessToken: string) {
  return api.post("/signin-accesstoken", { token: accessToken });
}

export function signinCredential(credential: string) {
  return api.post("/signin-credential", { token: credential });
}
