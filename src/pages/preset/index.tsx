import React from "react";
import { Button, Stack } from "@mui/material";
import { useAtom } from "jotai";
import SectionHeader from "@/components/common/SectionHeader";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import IndicatorExplanation from "@/components/preset/IndicatorExplanation";
import PresetSetting from "@/components/preset/PresetSetting";
import PresetTable from "@/components/preset/PresetTable";
import TopNavLayout from "@/components/topnav/TopNavLayout";
import presetsAtom from "@/datas/preset";

function Preset() {
  const [presets, setPresets] = useAtom(presetsAtom);
  const addNewPreset = () => {
    const newId = presets[presets.length - 1].id + 1 || 0;
    // 프리셋 저장 API 호출로 변경할 부분임.
    setPresets(prev => [
      ...prev,
      {
        id: newId,
        name: `신규 프리셋 ${newId}`,
        settingIndicator: "",
        profitRate: 0,
        lossRate: 0,
        setting: "",
      },
    ]);
  };

  return (
    <TopNavLayout>
      <BotUseInfo />
      <Stack direction="column" className="gap-4 mt-10">
        <SectionHeader className="flex justify-between items-center">
          프리셋
          <Button
            variant="contained"
            size="small"
            className="mx-3 bg-mellowYellow text-black"
            onClick={addNewPreset}
          >
            프리셋 추가
          </Button>
        </SectionHeader>
        <PresetTable />
      </Stack>
      <Stack direction="row" className="gap-4 mt-10">
        <Stack direction="column" className="grow basis-1/2 gap-4">
          <SectionHeader>프리셋 설정</SectionHeader>
          <PresetSetting />
        </Stack>

        <Stack direction="column" className="grow basis-1/2 gap-4">
          <SectionHeader>(TD Sequential) 보조지표 설명</SectionHeader>
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
