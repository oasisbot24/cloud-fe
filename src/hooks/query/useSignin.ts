import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";

import api from "@/apis/network";
import authAtom, { Auth } from "@/datas/auth";

interface SigninResponseType {
  isAgree: boolean;
}

interface AgreementBody {
  essentialAgreement: boolean;
  adAgreement: boolean;
}

async function getUserInfo(accesstoken: string): Promise<Auth> {
  const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { Authorization: `Bearer ${accesstoken}` },
  });
  return userInfo.data;
}

async function signinAccessToken(accessToken: string): Promise<SigninResponseType> {
  const res = await api.post<ApiResponseType<void> & SigninResponseType>("/signin-accesstoken", {
    token: accessToken,
  });
  return res.data;
}

export default function useSignin() {
  const [, setAuth] = useAtom(authAtom);
  const signinAccessTokenMutation = useMutation({
    mutationFn: async (accesstoken: string) => {
      const { isAgree } = await signinAccessToken(accesstoken);
      const userInfo = await getUserInfo(accesstoken);
      return { ...userInfo, isAgree };
    },
    mutationKey: ["signinAccessToken"],
    onSuccess: data => {
      const auth = data as Auth;
      localStorage.setItem("auth", JSON.stringify(auth));
      setAuth(auth);
    },
  });

  const postAgreementMutation = useMutation({
    mutationFn: async (body: AgreementBody) => api.post<ApiResponseType<void>>("/agreement", body),
    mutationKey: ["postAgreement"],
  });

  return {
    signinAccessTokenMutation,
    postAgreementMutation,
  };
}
