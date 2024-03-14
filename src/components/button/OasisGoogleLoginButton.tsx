import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import signin from "@/apis/signin";
import authAtom, { Auth } from "@/datas/auth";

export default function OasisGoogleLoginButton() {
  const [, setAuth] = useAtom(authAtom);
  const signinMutation = useMutation({
    mutationFn: signin,
  });

  const handleCredentialResponse = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    signinMutation.mutate(credential || "", {
      onSuccess: () => {
        localStorage.setItem("credential", credential || "");
        const auth = jwtDecode(credential || "") as Auth;
        setAuth(auth);
      },
    });
  };
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log("Login Success");
        handleCredentialResponse(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      size="large"
      width="260"
    />
  );
}
