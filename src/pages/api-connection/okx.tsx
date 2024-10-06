import { useEffect } from "react";
import { useRouter } from "next/router";
import { useOkxOauthTokenMutation } from "@/hooks/query/useApiConnection";
import { createRandomString } from "@/libs/string";

function ApiConnectionOkx() {
  const { query } = useRouter();
  const { code, state } = query;
  const { postOkxOauthTokenMutation } = useOkxOauthTokenMutation();
  useEffect(() => {
    if (!code || !state) return;
    postOkxOauthTokenMutation.mutate(
      {
        code: code as string,
        passphrase: createRandomString(16),
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
