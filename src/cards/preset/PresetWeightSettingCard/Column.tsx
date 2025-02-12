import { Box, Stack } from "@mui/material";

import GraphText from "@/cards/preset/PresetWeightSettingCard/GraphText";

function Column() {
  return (
    <Stack className="h-full">
      <Stack className="h-full items-center justify-between">
        <GraphText text="100" />
        <GraphText text="80" />
        <GraphText text="60" />
        <GraphText text="40" />
        <GraphText text="20" />
        <GraphText text="0" />
      </Stack>
      <Box className="h-[24px] w-full shrink-0" />
    </Stack>
  );
}

export default Column;
