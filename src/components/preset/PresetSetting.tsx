import React, { useState } from "react";
import Selectbox from "../basic/Selectbox";
import OasisbotInput from "../input/OasisbotInput";

function PresetSetting() {
  const [preset, setPreset] = useState<string>("high");
  const [indicator, setIndicator] = useState<string>("high");
  const [position, setPosition] = useState<string>("pos1");
  const [profitRate, setProfitRate] = useState<string>("");
  const [lossRate, setLossRate] = useState<string>("");

  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-sm shadow-md">
      <div className="flex place-content-between">
        <div className="flex items-center">프리셋 이름</div>
        <OasisbotInput id="preset" value={preset} setValue={setPreset} />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">설정 보조지표</div>
        <Selectbox
          labelId="preset"
          selectLabel=""
          itemList={[
            { value: "high", itemLabel: "상승장 프리셋" },
            { value: "low", itemLabel: "하락장 프리셋" },
          ]}
          state={indicator}
          setState={setIndicator}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">진입 포지션</div>
        <Selectbox
          labelId="position"
          selectLabel=""
          itemList={[
            { value: "pos1", itemLabel: "포지션1" },
            { value: "pos2", itemLabel: "포지션2" },
          ]}
          state={position}
          setState={setPosition}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">익절율</div>
        <OasisbotInput
          id="preset"
          value={profitRate}
          setValue={setProfitRate}
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">손절율</div>
        <OasisbotInput id="preset" value={lossRate} setValue={setLossRate} />
      </div>
    </div>
  );
}

export default PresetSetting;
