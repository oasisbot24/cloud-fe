import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { postOkxOauthToken } from "@/apis/apiConnection/oauth";
import {
  SmartAccessResultBody,
  postSmartAccessResult,
  postSmartAccessSession,
} from "@/apis/apiConnection/smartAccess";
import { getUserExchanges } from "@/apis/user/user";

export function useOkxOauthTokenMutation() {
  const postOkxOauthTokenMutation = useMutation({
    mutationFn: postOkxOauthToken,
    mutationKey: ["postOkxOauthToken"],
  });
  return {
    postOkxOauthTokenMutation,
  };
}

export function useSmartAccessMutation() {
  const queryClient = useQueryClient();
  const postSmartAccessResultMutation = useMutation({
    mutationFn: ({ exchange, body }: { exchange: ExchangeType; body: SmartAccessResultBody }) =>
      postSmartAccessResult(exchange, body),
    mutationKey: ["postSmartAccessResult"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserExchanges"] });
    },
  });
  const postSmartAccessSessionMutation = useMutation({
    mutationFn: postSmartAccessSession,
    mutationKey: ["postSmartAccessSession"],
  });
  return {
    postSmartAccessResultMutation,
    postSmartAccessSessionMutation,
  };
}

export function useUserExchangesQuery(queryClient?: QueryClient) {
  const userExchangeQuery = useQuery(
    {
      queryFn: getUserExchanges,
      queryKey: ["getUserExchanges"],
    },
    queryClient,
  );
  return {
    userExchangeQuery,
  };
}
