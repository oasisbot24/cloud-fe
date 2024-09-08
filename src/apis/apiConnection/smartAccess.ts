import api from "../network";

async function postSmartAccessSession(exchange: ExchangeType) {
  const res = await api.post<ApiResponseType<string>>(
    `/smart-access/session`,
    {},
    {
      params: { exchange },
    },
  );
  return res.data.data;
}

export interface SmartAccessResultBody {
  uid: string;
}
async function postSmartAccessResult(
  exchange: ExchangeType,
  body: SmartAccessResultBody,
) {
  await api.post<ApiResponseType<void>>(`/smart-access/result`, body, {
    params: { exchange },
  });
}

export { postSmartAccessSession, postSmartAccessResult };
