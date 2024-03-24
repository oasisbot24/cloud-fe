import React from "react";
import { Button } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import Selectbox from "@/components/basic/Selectbox";
import OasisbotInput from "@/components/input/OasisbotInput";
import {
  indicatorNameAtom,
  lossCutRateAtom,
  positionAtom,
  presetNameAtom,
  profitCutRateAtom,
  selectedPresetIdAtom,
} from "@/datas/preset";
import usePreset from "@/hooks/preset/usePreset";

function PresetSetting() {
  const { indicators, isIndicatorsLoading } = usePreset();
  const selectedPresetId = useAtomValue<string>(selectedPresetIdAtom);
  const [presetName, setPresetName] = useAtom<string>(presetNameAtom);
  const [indicatorName, setIndicatorName] = useAtom<string>(indicatorNameAtom);
  const [position, setPosition] = useAtom<string>(positionAtom);
  const [profitCutRate, setProfitCutRate] = useAtom<string>(profitCutRateAtom);
  const [lossCutRate, setLossCutRate] = useAtom<string>(lossCutRateAtom);

  const { updatePresetMutation } = usePreset();

  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-sm shadow-md">
      <div className="flex place-content-between">
        <div className="flex items-center">프리셋 이름</div>
        <OasisbotInput
          id="presetName"
          value={presetName}
          setValue={setPresetName}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">설정 보조지표</div>
        <Selectbox
          labelId="indicatorName"
          selectLabel=""
          itemList={isIndicatorsLoading ? [] : indicators}
          state={indicatorName}
          setState={setIndicatorName}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">진입 포지션</div>
        <Selectbox
          labelId="position"
          selectLabel=""
          itemList={[
            { value: "short", itemLabel: "숏" },
            { value: "long", itemLabel: "롱" },
            { value: "entry", itemLabel: "진입" },
          ]}
          state={position}
          setState={setPosition}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">익절율</div>
        <OasisbotInput
          id="preset"
          value={profitCutRate}
          setValue={setProfitCutRate}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">손절율</div>
        <OasisbotInput
          id="preset"
          value={lossCutRate}
          setValue={setLossCutRate}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <Button onClick={console.log}>세팅 변경</Button>
        <Button
          onClick={() =>
            updatePresetMutation.mutate({
              presetId: selectedPresetId,
              body: {
                presetName,
                indicatorName,
                presetData: "", // 지금은 입력하는 부분이 없어 빈 문자열로 처리
                position,
                profitCutRate: Number(profitCutRate),
                lossCutRate: Number(lossCutRate),
              },
            })
          }
        >
          저장
        </Button>
      </div>
    </div>
  );
}

export default PresetSetting;
