import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

interface OasisGoogleLoginButtonProps {
  onSuccess: (credentialResponse: CredentialResponse) => void;
  onError: () => void;
}

export default function OasisGoogleLoginButton({
  onSuccess,
  onError,
}: OasisGoogleLoginButtonProps) {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log("Login Success");
        onSuccess(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
        onError();
      }}
      size="large"
      width="260"
    />
  );
}
