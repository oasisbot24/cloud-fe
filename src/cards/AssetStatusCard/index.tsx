import Image from "next/image";
import { Box, CardContent, Stack } from "@mui/material";
import AssetStatusInfo from "@/cards/AssetStatusCard/AssetStatusInfo";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CharacterIcon from "@/components/Icon/CharacterIcon";

export default function AssetStatusCard() {
  return (
    <Card sx={{ background: "url('/assetstatus/bg.png')" }}>
      <CardHeader id="rise-arrow" title="실시간 종합 자산현황" isDark />
      <CardContent className="flex flex-row w-full h-full max-h-[260px]">
        <Box className="w-1/2 shrink-0">
          <AssetStatusInfo />
        </Box>
        <Box className="w-1/2 relative">
          <Stack
            direction="column"
            className="h-full justify-center items-center"
          >
            <CharacterIcon happiness={7} />
            <Image
              className="absolute bottom-0"
              src="/assetstatus/chart.png"
              alt="chart"
              width={200}
              height={110}
            />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
