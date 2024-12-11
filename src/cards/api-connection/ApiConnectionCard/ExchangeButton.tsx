import { useRouter } from "next/router";

import { ButtonBase, CircularProgress, Stack, Typography } from "@mui/material";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";
import { useSmartAccessMutation } from "@/hooks/query/useApiConnection";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";

import openScrap from "./openScrap";

interface ExchangeButtonProps {
  exchange: ExchangeType;
  isProcessing?: boolean;
  isConnected?: boolean;
  disabled?: boolean;
}
export default function ExchangeButton({
  exchange,
  isProcessing = false,
  isConnected = false,
  disabled = false,
}: ExchangeButtonProps) {
  const { push } = useRouter();
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const { postSmartAccessSessionMutation, postSmartAccessResultMutation } =
    useSmartAccessMutation();
  const clickHandler = () => {
    if (subscribeData?.productName === "Free") {
      push("/subscribe");
      return;
    }
    if (exchange === "binance" || exchange === "lbank") return;
    if (exchange === "okx") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { OKEXOAuthSDK } = window as unknown as any;
      if (OKEXOAuthSDK) {
        const state = OKEXOAuthSDK.generateState();
        OKEXOAuthSDK.authorize({
          response_type: "code",
          access_type: "offline",
          client_id: process.env.NEXT_PUBLIC_OKX_OAUTH_CLIENT_ID,
          redirect_uri: encodeURIComponent(`${window.location.origin}/api-connection/okx`),
          scope: "fast_api",
          state,
        });
      } else {
        console.error("sdk has not been loaded");
      }
    } else if (exchange === "upbit") {
      postSmartAccessSessionMutation.mutate(
        {
          body: null,
          params: { exchange },
        },
        {
          onSuccess: u => {
            openScrap(u, () => {
              postSmartAccessResultMutation.mutate({
                body: { uid: u },
                params: { exchange },
              });
            });
          },
        },
      );
    }
  };
  return (
    <ButtonBase
      className="h-[146px] w-[146px] rounded-full border border-solid border-neutral-300"
      sx={{
        backgroundColor: disabled ? "#e3e3e3" : isConnected ? "#EEF0FE" : "white",
      }}
      disabled={isConnected || disabled || isProcessing}
      onClick={clickHandler}
    >
      <Stack className="items-center justify-between">
        {isProcessing ? (
          <CircularProgress size={42} className="mb-2" />
        ) : (
          <ExchangeIcon exchange={exchange} size={60} />
        )}
        {disabled ? (
          <Typography variant="300R" className="text-sub-1">
            지원예정
          </Typography>
        ) : isConnected ? (
          <Typography variant="300R" className="text-sub-1">
            연결완료
          </Typography>
        ) : isProcessing ? (
          <Typography variant="300R" className="text-sub-1">
            연결중
          </Typography>
        ) : (
          <Typography variant="300R" className="text-font-2">
            연결하기
          </Typography>
        )}
      </Stack>
    </ButtonBase>
  );
}
