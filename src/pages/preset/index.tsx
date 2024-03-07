import React from "react";
import { Button, Stack } from "@mui/material";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import IndicatorExplanation from "@/components/preset/IndicatorExplanation";
import PresetSetting from "@/components/preset/PresetSetting";
import PresetTable from "@/components/preset/PresetTable";
import TopNavLayout from "@/components/topnav/TopNavLayout";

function Preset() {
  return (
    <TopNavLayout>
      <BotUseInfo />
      <Stack direction="column" className="gap-4 mt-10">
        <div className="grow py-2 pl-4 bg-darkBlue text-white font-roboto font-semibold rounded-md flex justify-between items-center">
          프리셋
          <Button
            variant="contained"
            size="small"
            className="mx-3 bg-mellowYellow text-black"
          >
            프리셋 추가
          </Button>
        </div>
        <PresetTable />
      </Stack>
      <Stack direction="row" className="gap-4 mt-10">
        <Stack direction="column" className="grow basis-1/2 gap-4">
          <div className="grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            프리셋 설정
          </div>
          <PresetSetting />
        </Stack>

        <Stack direction="column" className="grow basis-1/2 gap-4">
          <div className="grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md">
            (TD Sequential) 보조지표 설명
          </div>
          <IndicatorExplanation />
        </Stack>
      </Stack>
      <Stack direction="row" className="gap-4 mt-2">
        <Stack direction="column" className="grow basis-1/2 gap-4" />
        <Stack direction="column" className="grow basis-1/2 gap-4">
          <div className="grow h-10 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-sm">
            <div>TD Sequential 보조지표는 대표적인 역추세 보조지표로서</div>
            <div>카운팅이 늘어남에 따라 추세 전환의 확률이 높아집니다.</div>
          </div>
        </Stack>
      </Stack>
    </TopNavLayout>
  );
}

export default Preset;
