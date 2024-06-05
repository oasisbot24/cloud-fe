import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { signinAccessToken, signinCredential } from "@/apis/signin";
import authAtom, { Auth } from "@/datas/auth";

async function getUserInfo(accesstoken: string): Promise<Auth> {
  const userInfo = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: { Authorization: `Bearer ${accesstoken}` },
    },
  );
  return userInfo.data;
}

export default function useLogin() {
  const [, setAuth] = useAtom(authAtom);
  const signinAccessTokenMutation = useMutation({
    mutationFn: async (accesstoken: string) => {
      await signinAccessToken(accesstoken);
      const userInfo = await getUserInfo(accesstoken);
      return userInfo;
    },
    mutationKey: ["signinAccessToken"],
    onSuccess: data => {
      const auth = data as Auth;
      localStorage.setItem("auth", JSON.stringify(auth));
      setAuth(auth);
    },
  });

  const signinCredentialMutation = useMutation({
    mutationFn: signinCredential,
    mutationKey: ["signinCredential"],
    onSuccess: (_, variables) => {
      const auth = jwtDecode(variables || "") as Auth;
      localStorage.setItem("auth", JSON.stringify(auth));
      setAuth(auth);
    },
  });

  return { signinAccessTokenMutation, signinCredentialMutation };
}
