import { ButtonBase, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import Icon from "@/components/Icon/index";
import useLogin from "@/hooks/query/useLogin";

function GoogleSigninButton({ onClick }: { onClick?: () => void }) {
  const { signinAccessTokenMutation } = useLogin();

  /*
  useGoogleOneTapLogin({
    onSuccess: credentialResponse =>
      signinCredentialMutation.mutate(credentialResponse.credential || "", {
        onSuccess: () => onClick?.(),
      }),
  });
  */
  const handleClick = useGoogleLogin({
    onSuccess: tokenResponse =>
      signinAccessTokenMutation.mutate(tokenResponse.access_token, {
        onSuccess: () => onClick?.(),
      }),
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
