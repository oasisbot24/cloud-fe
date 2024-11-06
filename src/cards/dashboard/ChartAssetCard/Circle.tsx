import { Box, Stack, Typography } from "@mui/material";

import CircleSvg from "@/cards/dashboard/ChartAssetCard/CircleSvg";
import { numberSlice } from "@/libs/string";

function ElementCircle({
  fillColorStart = "",
  fillColorEnd = "",
  startAngle = 0,
  endAngle = 80,
  size = 100,
}) {
  return (
    <Box className="absolute h-full w-full animate-circle-chart">
      <Box
        sx={{
          width: size * 2,
          height: size * 2,
        }}
        className="transition-width transition-height absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 duration-300 ease-out"
      >
        <CircleSvg
          fillColorStart={fillColorStart}
          fillColorEnd={fillColorEnd}
          startAngle={startAngle - 90}
          endAngle={endAngle - 90}
        />
      </Box>
    </Box>
  );
}

function CenterCircle({ percent = 50, amount = "₩ 12,112,112" }) {
  return (
    <Box className="absolute h-full w-full">
      <Box
        sx={{
          width: 118,
          height: 118,
          boxShadow: "0px 5px 25px 0px #0000001A",
        }}
        className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white"
      >
        <Stack className="absolute right-1/2 top-1/2 h-full w-full -translate-y-1/2 translate-x-1/2 justify-center">
          <Box className="text-center">
            <Typography fontFamily="San Francisco" fontWeight={800} fontSize={28} lineHeight="36px">
              {numberSlice(percent, 2)}%
            </Typography>
          </Box>
          <Box className="text-center">
            <Typography
              fontFamily="San Francisco"
              fontWeight={600}
              fontSize={12}
              lineHeight="14px"
              className="text-font-3"
            >
              {amount}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

function BaseCircle() {
  return (
    <Box className="absolute h-full w-full animate-circle-chart">
      <Box
        sx={{
          width: 162,
          height: 162,
        }}
        className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-neutral-400"
      />
    </Box>
  );
}

export { ElementCircle, CenterCircle, BaseCircle };
