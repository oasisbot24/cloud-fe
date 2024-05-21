import { useRouter } from "next/router";
import { ButtonBase, Typography } from "@mui/material";
import {
  CredentialResponse,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import signin from "@/apis/signin";
import Icon from "@/components/Icon/index";
import authAtom, { Auth } from "@/datas/auth";

function GoogleSigninButton({ onClick }: { onClick?: () => void }) {
  const { push } = useRouter();
  const [, setAuth] = useAtom(authAtom);
  const signinMutation = useMutation({
    mutationFn: signin,
  });
  const onSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    const { credential } = credentialResponse;
    signinMutation.mutate(credential || "", {
      onSuccess: () => {
        localStorage.setItem("credential", credential || "");
        const auth = jwtDecode(credential || "") as Auth;
        setAuth(auth);
        push("/dashboard");
      },
    });
    onClick?.();
  };

  useGoogleOneTapLogin({
    onSuccess,
  });

  const handleClick = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      console.log(userInfo);
      onClick?.();
    },
  });

  return (
    <ButtonBase
      className="rounded-full text-white border-white px-7 py-4 w-fit flex gap-4 items-center"
      sx={{
        border: "1px solid",
      }}
      onClick={() => handleClick()}
    >
      <Icon src="/google.png" size={20} />
      <Typography variant="bodyS">Google로 계속하기</Typography>
    </ButtonBase>
  );
}

export default GoogleSigninButton;
