import api from "../network";

interface OkxOauthApiConnectionBody {
  code: string;
  passphrase: string;
}
async function postOkxOauthToken(body: OkxOauthApiConnectionBody) {
  const res = await api.post<ApiResponseType<void>>("/oauth/okx/apikey", body);
  return res.data;
}

export { postOkxOauthToken };
