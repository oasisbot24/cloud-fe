import { ButtonBase, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";

import Icon from "@/components/Icon/index";
import useSignin from "@/hooks/query/useSignin";

function GoogleSigninButton({ onSuccess }: { onSuccess: (data: { isAgree: boolean }) => void }) {
  const { signinAccessTokenMutation } = useSignin();

  /*
  useGoogleOneTapLogin({
    onSuccess: credentialResponse =>
      signinCredentialMutation.mutate(credentialResponse.credential || "", {
        onSuccess: () => onClick?.(),
      }),
  });
  */
  const handleClick = useGoogleLogin({
    onSuccess: tokenResponse => {
      signinAccessTokenMutation.mutate(tokenResponse.access_token, {
        onSuccess: data => {
          onSuccess(data);
        },
        onError: error => {
          console.log("error on mutate: ", error);
        },
      });
    },
    onError: error => {
      console.log("error on google login: ", error);
    },
  });

  return (
    <ButtonBase
      className="flex w-fit items-center gap-4 rounded-full border-white px-7 py-4 text-white"
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
