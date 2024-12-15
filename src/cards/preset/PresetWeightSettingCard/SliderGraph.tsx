import { Stack } from "@mui/material";
import { useAtom } from "jotai";

import Column from "@/cards/preset/PresetWeightSettingCard/Column";
import GraphText from "@/cards/preset/PresetWeightSettingCard/GraphText";
import VerticalSliderSum from "@/cards/preset/PresetWeightSettingCard/VerticalSilderSum";
import VerticalSlider from "@/cards/preset/PresetWeightSettingCard/VerticalSlider";
import { PresetWeightType, presetWeightAtom } from "@/datas/preset";
import { sumPresetWeight } from "@/libs/preset";

function SliderGraph() {
  const [presetWeight, setPresetWeight] = useAtom(presetWeightAtom);
  return (
    <Stack direction="row" className="h-full gap-8">
      <Column />
      <Stack direction="row" className="h-full w-full items-center justify-between">
        {Object.keys(presetWeight).map(key => {
          return (
            <Stack gap={2} key={key} className="h-full items-center">
              <VerticalSlider
                value={presetWeight[key as keyof PresetWeightType]}
                onChange={(_, newValue) => {
                  const updatedValue = newValue as number;

                  setPresetWeight(prev => {
                    const currentWeight = prev[key as keyof PresetWeightType];
                    const sum = sumPresetWeight(prev);
                    const newSum = sum - currentWeight + updatedValue;

                    if (newSum <= 100) {
                      return {
                        ...prev,
                        [key]: updatedValue,
                      };
                    }

                    return prev;
                    // return {
                    //   ...prev,
                    //   [key]: updatedValue,
                    // };
                  });
                }}
              />
              <GraphText text={key} />
            </Stack>
          );
        })}
        <Stack gap={2} className="h-full items-center">
          <VerticalSliderSum sum={sumPresetWeight(presetWeight)} />
          <GraphText text="종합" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderGraph;
