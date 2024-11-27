import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "@/libs/network";

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
interface PostSmartAccessResultBody {
  uid: string;
}
export function useSmartAccessMutation() {
  const queryClient = useQueryClient();
  const postSmartAccessResultMutation = useMutation({
    mutationFn: async ({
      exchange,
      body,
    }: {
      exchange: ExchangeType;
      body: PostSmartAccessResultBody;
    }) => {
      await api.post<ApiResponseType<void>>(`/smart-access/result`, body, {
        params: { exchange },
      });
    },
    mutationKey: ["postSmartAccessResult"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserExchanges"] });
    },
  });
  const postSmartAccessSessionMutation = useMutation({
    mutationFn: async (exchange: ExchangeType) => {
      const res = await api.post<ApiResponseType<string>>(
        `/smart-access/session`,
        {},
        {
          params: { exchange },
        },
      );
      return res.data.data;
    },
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
      queryFn: async () => {
        const res = await api.get<ApiResponseType<ExchangeType[]>>("/user/apikey/exchanges");
        return res.data?.data;
      },
      queryKey: ["getUserExchanges"],
    },
    queryClient,
  );
  return {
    userExchangeQuery,
  };
}
