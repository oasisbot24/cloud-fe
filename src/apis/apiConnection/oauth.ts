import api from "../network";

interface OkxOauthApiConnectionBody {
  code: string;
}
async function postOkxOauthToken(body: OkxOauthApiConnectionBody) {
  const res = await api.post<ApiResponseType<void>>("/oauth/okx/apikey", body);
  return res.data;
}

export { postOkxOauthToken };
