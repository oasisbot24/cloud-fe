import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Box, Stack } from "@mui/material";

import ApiConnectionCard from "@/cards/api-connection/ApiConnectionCard";
import ApiConnectionTitleCard from "@/cards/api-connection/ApiConnectionTitleCard";
import { useOkxOauthTokenMutation } from "@/hooks/query/useApiConnection";
import Layout from "@/layouts/Layout";

function ApiConnectionOkx() {
  const { query } = useRouter();
  const { code, state } = query;
  const { postOkxOauthTokenMutation } = useOkxOauthTokenMutation();
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    if (!code || !state) return;
    postOkxOauthTokenMutation.mutate(
      {
        code: code as string,
      },
      {
        onSuccess: () => {
          setSuccess("연결이 완료되었습니다.");
        },
        onError: () => {
          setError("알 수 없는 오류가 발생했습니다.");
        },
      },
    );
  }, [code, state]);
  return (
    <Layout>
      <Box className="h-[530px] w-full">
        <ApiConnectionTitleCard />
      </Box>
      <Stack className="relative mt-[-250px] items-center justify-start pb-4">
        <Box className="w-[480px]">
          <ApiConnectionCard processing={success === undefined ? "okx" : undefined} error={error} />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ApiConnectionOkx;
