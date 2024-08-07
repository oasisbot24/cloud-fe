import { Box, Stack } from "@mui/material";
import Card from "@/cards/Card";
import ExchangeSelectDescription from "@/components/signin/dialog/ExchangeSelectDescription";
import ExchangeButton from "./ExchangeButton";

export default function ApiConnectionCard() {
  return (
    <Card>
      <Stack className="px-4 md:px-8 xl:px-16 py-4 md:py-8 items-center justify-between w-full h-full gap-8">
        <Box className="grid grid-cols-2 w-fit gap-4">
          <ExchangeButton exchange="upbit" isConnected={false} />
          <ExchangeButton exchange="okx" isConnected />
        </Box>
        <ExchangeSelectDescription />
      </Stack>
    </Card>
  );
}
