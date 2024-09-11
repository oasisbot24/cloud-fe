import { useEffect } from "react";
import { useRouter } from "next/router";
import { useOkxOauthTokenMutation } from "@/hooks/query/useApiConnection";

function ApiConnectionOkx() {
  const { query } = useRouter();
  const { code, state } = query;
  const { postOkxOauthTokenMutation } = useOkxOauthTokenMutation();
  useEffect(() => {
    if (!code || !state) return;
    if (
      process.env.NEXT_PUBLIC_OKX_OAUTH_CLIENT_ID === undefined ||
      process.env.NEXT_PUBLIC_OKX_OAUTH_CLIENT_SECRET === undefined
    )
      return;
    postOkxOauthTokenMutation.mutate(
      {
        grant_type: "authorization_code",
        code: code as string,
        client_id: process.env.NEXT_PUBLIC_OKX_OAUTH_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_OKX_OAUTH_CLIENT_SECRET,
      },
      {
        onSuccess: res => {
          console.log(res);
        },
      },
    );
  }, [code, state]);
}

export default ApiConnectionOkx;
