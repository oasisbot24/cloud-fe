import api from "../network";

async function getUserExchanges() {
  const res = await api.get<ApiResponseType<ExchangeType[]>>("/user/apikey/exchanges");
  return res.data?.data;
}

export { getUserExchanges };
