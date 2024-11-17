import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  SmartAccessResultBody,
  postSmartAccessResult,
  postSmartAccessSession,
} from "@/apis/apiConnection/smartAccess";
import api from "@/apis/network";
import { getUserExchanges } from "@/apis/user/user";

interface PostOkxOauthTokenBody {
  code: string;
}

export function useOkxOauthTokenMutation() {
  const postOkxOauthTokenMutation = useMutation({
    mutationFn: async (body: PostOkxOauthTokenBody) => {
      const res = await api.post<ApiResponseType<void>>("/oauth/okx/apikey", body);
      return res.data;
    },
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
