import { useMutation } from "@tanstack/react-query";
import {
  SmartAccessResultBody,
  postSmartAccessResult,
  postSmartAccessSession,
} from "@/apis/smartAccess/smartAccess";

export function useSmartAccessMutation() {
  const postSmartAccessResultMutation = useMutation({
    mutationFn: ({
      exchange,
      body,
    }: {
      exchange: ExchangeType;
      body: SmartAccessResultBody;
    }) => postSmartAccessResult(exchange, body),
    mutationKey: ["postSmartAccessResult"],
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
