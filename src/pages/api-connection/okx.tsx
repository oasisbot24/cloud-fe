import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";
import ApiConnectionCard from "@/cards/api-connection/ApiConnectionCard";
import ApiConnectionTitleCard from "@/cards/api-connection/ApiConnectionTitleCard";
import { useOkxOauthTokenMutation } from "@/hooks/query/useApiConnection";
import Layout from "@/layouts/Layout";
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
  return (
    <Layout>
      <Box className="w-full h-[530px]">
        <ApiConnectionTitleCard />
      </Box>
      <Stack className="relative items-center justify-start mt-[-250px] pb-4">
        <Box className="w-[480px]">
          <ApiConnectionCard processing="okx" />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ApiConnectionOkx;
