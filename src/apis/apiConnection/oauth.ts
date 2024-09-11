import axios from "axios";

interface OkxOauthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}
interface OkxOauthTokenBody {
  grant_type: string;
  client_id: string;
  client_secret: string;
  code: string;
}
async function postOkxOauthToken(body: OkxOauthTokenBody) {
  const res = await axios.post<OkxOauthToken>(
    `https://www.okx.com/v5/users/oauth/token`,
    body,
  );
  return res.data;
}

export { postOkxOauthToken };
