import { Box, Stack } from "@mui/material";
import PresetIndicatorInfoCard from "@/cards/PresetIndicatorInfoCard/index";
import PresetInfoCard from "@/cards/PresetInfoCard/index";
import PresetSettingCard from "@/cards/PresetSettingCard/index";
import PresetWeightInfoCard from "@/cards/PresetWeightInfoCard/index";
import PresetWeightSettingCard from "@/cards/PresetWeightSettingCard/index";
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
              <Box className="w-1/3 h-full">
                <PresetSettingCard />
              </Box>
              <Box className="w-2/3 h-full">
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
