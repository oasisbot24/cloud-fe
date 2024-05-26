import api from "@/apis/network";

async function signin(credential: string) {
  await api.post("/signin", { credential });
}

async function signinAccessToken(accessToken: string) {
  await api.post("/signin-accesstoken", { token: accessToken });
}

async function signinCredential(credential: string) {
  await api.post("/signin-credential", { token: credential });
}

export { signin, signinAccessToken, signinCredential };
