import api from "@/apis/network";

async function signin(credential: string) {
  await api.post("/signin", { credential });
}

interface SigninResponseType {
  isAgree: boolean;
}

async function signinAccessToken(
  accessToken: string,
): Promise<SigninResponseType> {
  const res = await api.post<ApiResponseType<void> & SigninResponseType>(
    "/signin-accesstoken",
    {
      token: accessToken,
    },
  );
  return res.data;
}

async function signinCredential(credential: string) {
  const res = await api.post<ApiResponseType<void> & SigninResponseType>(
    "/signin-credential",
    { token: credential },
  );
  return res.data;
}

export { signin, signinAccessToken, signinCredential };
