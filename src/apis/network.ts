import axios from "axios";

const getAuthorizationFromLocalStorage = () => {
  const accessToken = localStorage.getItem("authorization");
  if (!accessToken) {
    return null;
  }
  return accessToken;
};

const getAuthorizationRefreshFromLocalStorage = () => {
  const refreshToken = localStorage.getItem("authorizationrefresh");
  if (!refreshToken) {
    return null;
  }
  return refreshToken;
};

const getExchangeFromLocalStorage = () => {
  const exchange = localStorage.getItem("exchange");
  if (!exchange) {
    return null;
  }
  return exchange;
};

const getNewAccessToken = async (response: any) => {
  localStorage.clear();
  if (response.headers.authorization)
    localStorage.setItem("authorization", response.headers.authorization);
  if (response.headers.authorizationrefresh)
    localStorage.setItem(
      "authorizationrefresh",
      response.headers.authorizationrefresh,
    );
};

const oasisUrl = "http://3.36.71.228:8080/api/v1";
const api = axios.create({
  baseURL: oasisUrl,
  validateStatus: status => {
    return status < 300;
  },
});
api.interceptors.request.use(
  async config => {
    if (typeof document !== "undefined") {
      const authorization = getAuthorizationFromLocalStorage();
      const authorizationRefresh = getAuthorizationRefreshFromLocalStorage();
      const exchange = getExchangeFromLocalStorage();
      config.headers.set("Authorization", `Bearer ${authorization}`);
      config.headers.set(
        "AuthorizationRefresh",
        `Bearer ${authorizationRefresh}`,
      );
      config.headers.set("Exchange", exchange);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  response => {
    if (typeof document !== "undefined") {
      if (response.headers.authorization)
        localStorage.setItem("authorization", response.headers.authorization);
      if (response.headers.authorizationrefresh)
        localStorage.setItem(
          "authorizationrefresh",
          response.headers.authorizationrefresh,
        );
    }
    return response;
  },
  error => {
    if (error.response.status === 406) {
      console.log("만료된 토큰입니다 재발급 하겠습니다.");
      // return getNewAccessToken(error.response);
    }
    return Promise.reject(error);
  },
);

export default api;
