import { Box, Stack } from "@mui/material";
import PresetIndicatorInfoCard from "@/cards/preset/PresetIndicatorInfoCard/index";
import PresetInfoCard from "@/cards/preset/PresetInfoCard/index";
import PresetSettingCard from "@/cards/preset/PresetSettingCard/index";
import PresetWeightInfoCard from "@/cards/preset/PresetWeightInfoCard/index";
import PresetWeightSettingCard from "@/cards/preset/PresetWeightSettingCard/index";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import Carousel from "@/layouts/Carousel/index";
import Layout from "@/layouts/Layout";

function OasisBot() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack direction="row" className="w-full h-[900px] gap-4">
          <Box className="w-1/4 h-full">
            <PresetInfoCard />
          </Box>
          <Stack className="w-3/4 h-full gap-4">
            <Stack direction="row" className="w-full h-1/2 min-h-[436px] gap-4">
              <Box className="w-full h-full">
                <PresetSettingCard />
              </Box>
              <Box className="w-[768px] shrink-0 h-full">
                <PresetIndicatorInfoCard />
              </Box>
            </Stack>
            <Stack direction="row" className="w-full h-1/2 min-h-[436px] gap-4">
              <Box className="w-3/4 h-full">
                <PresetWeightSettingCard />
              </Box>
              <Box className="w-1/4 h-full">
                <PresetWeightInfoCard />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
