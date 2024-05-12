import { ButtonBase, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import Icon from "@/components/Icon/index";

function GoogleSigninButton({ onClick }: { onClick?: () => void }) {
  const signIn = useGoogleLogin({
    flow: "auth-code",
    onSuccess: () => {
      console.log("Login Success");
      onClick?.();
    },
  });

  const handleClick = () => {
    signIn();
  };

  return (
    <ButtonBase
      className="rounded-full text-white border-white px-7 py-4 w-fit flex gap-4 items-center"
      sx={{
        border: "1px solid",
      }}
      onClick={handleClick}
    >
      <Icon src="/google.png" size={20} />
      <Typography variant="bodyS">Google로 계속하기</Typography>
    </ButtonBase>
  );
}

export default GoogleSigninButton;
