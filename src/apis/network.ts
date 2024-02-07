import axios from "axios";

const getAccessTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return null;
  }
  return accessToken;
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
      const accessToken = await getAccessTokenFromLocalStorage();
      if (accessToken)
        config.headers.set("authorization", `Bearer ${accessToken}`);
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
    return Promise.reject(error);
  },
);

export default api;
