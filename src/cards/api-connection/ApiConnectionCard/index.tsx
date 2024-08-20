import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import ExchangeSelectDescription from "@/components/signin/dialog/ExchangeSelectDescription";
import { useUserExchangesQuery } from "@/hooks/query/useSmartAccess";
import ExchangeButton from "./ExchangeButton";

export default function ApiConnectionCard() {
  const {
    userExchangeQuery: { data: userExchanges },
  } = useUserExchangesQuery();
  return (
    <Card>
      <Stack className="px-4 md:px-8 xl:px-16 py-4 md:py-8 items-center justify-between w-full h-full gap-8">
        <Box className="grid grid-cols-2 w-fit gap-4">
          <ExchangeButton
            exchange="upbit"
            isConnected={userExchanges?.includes("upbit")}
          />
          <ExchangeButton
            exchange="okx"
            isConnected={userExchanges?.includes("okx")}
          />
          <ExchangeButton
            exchange="binance"
            disabled
            isConnected={userExchanges?.includes("binance")}
          />
          <ExchangeButton
            exchange="lbank"
            disabled
            isConnected={userExchanges?.includes("lbank")}
          />
        </Box>
        <ExchangeSelectDescription />
      </Stack>
    </Card>
  );
}
