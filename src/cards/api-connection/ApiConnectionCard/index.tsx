import { Alert, Box, Stack } from "@mui/material";

import Card from "@/cards/Card";
import ExchangeSelectDescription from "@/components/signin/dialog/ExchangeSelectDescription";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";

import ExchangeButton from "./ExchangeButton";

interface Props {
  processing?: ExchangeType;
  error?: string;
  success?: string;
}

export default function ApiConnectionCard({ processing, error, success }: Props) {
  const {
    userExchangeQuery: { data: userExchanges },
  } = useUserExchangesQuery();
  return (
    <Card>
      <Stack className="h-full w-full items-center justify-between gap-8 px-4 py-4 md:px-8 md:py-8 xl:px-16">
        <Box className="grid w-fit grid-cols-2 gap-4">
          <ExchangeButton
            exchange="upbit"
            isConnected={userExchanges?.includes("upbit")}
            isProcessing={processing === "upbit"}
          />
          <ExchangeButton
            exchange="okx"
            isConnected={userExchanges?.includes("okx")}
            isProcessing={processing === "okx"}
          />
          <ExchangeButton
            exchange="binance"
            disabled
            isConnected={userExchanges?.includes("binance")}
            isProcessing={processing === "binance"}
          />
          <ExchangeButton
            exchange="lbank"
            disabled
            isConnected={userExchanges?.includes("lbank")}
            isProcessing={processing === "lbank"}
          />
        </Box>
        {error && (
          <Alert severity="error" className="w-full">
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" className="w-full">
            {success}
          </Alert>
        )}
        <ExchangeSelectDescription />
      </Stack>
    </Card>
  );
}
